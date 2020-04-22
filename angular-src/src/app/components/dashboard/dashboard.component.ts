import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { Tweet } from "../Tweet";
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit {
  @ViewChild("loadMore", { static: false }) loadMoreElement: ElementRef;
  @ViewChild("my_file", { static: false }) fileElement: ElementRef;

  tweets: Tweet[] = <Tweet[]>[];
  progress: number = 0;
  tweet: Tweet;
  loading = false;
  last_ID = null;
  countdown: Number = 140;
  tweetContent: String;
  validationError: boolean = false;
  validationErrorMessage: String;

  constructor(private apiService: ApiService,
    private validateService: ValidateService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    this.getTweetList(this.last_ID, 5);

    document.addEventListener('scroll', () => {
      const rect = this.loadMoreElement.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && !this.loading) {
        this.loading = true;
        console.log("LAST_ID:" + this.last_ID);
        this.getTweetList(this.last_ID, 5);
      }
    });
  }

  contentChanged(event) {
    if (this.tweetContent != null)
      this.countdown = 140 - event.length;
    else {
      this.countdown = 140;
    }
  }

  sendTweet() {
    if (this.tweetContent == null || this.tweetContent.length < 2) {
      this.validationError = true;
      this.validationErrorMessage = "Parret has to possess atleast 2 characters!";
    } else {
      if (this.tweetContent.length > 140) {
        this.validationError = true;
        this.validationErrorMessage = "Parret can't possess more than 140 characters!";
      } else {
        this.validationError = false;
        this.apiService.sendTweet({ content: this.tweetContent }).subscribe((res: any) => {
          if (res.success) {
            this.tweets = <Tweet[]>[];
            this.cdRef.detectChanges();
            this.getTweetList(null, 5);
            console.log(res)
          } else
            console.log(res.msg);
        });
        this.tweetContent = "";
      }
    }
  }

  getTweetList(ID, limit) {

    this.apiService.getFollowing().subscribe((res: any) => {

      var following = JSON.parse(res.following)
      this.apiService.loadData();
      if (following != null) {
        following.push(this.apiService.user.username);
      } else {
        following = [this.apiService.user.username];
      }

      this.apiService.getTweets(ID, limit, following).subscribe((res: any) => {
        if (res.success) {
          var tweets = JSON.parse(res.tweets);
          if (ID != null)
            var first = true;
          else
            var first = false;
          tweets.forEach(tweet => {
            if (!first) {
              var newTweet = new Tweet();
              newTweet._id = tweet._id;
              newTweet.content = tweet.content;
              newTweet.creator_ID = tweet.creator_ID;
              newTweet.type = tweet.type;
              newTweet.creator_username = tweet.creator_username;
              newTweet.date_created = this.timeSince(tweet.date_created);
              newTweet.name = tweet.name;
              newTweet.showDelete = false;
              newTweet.profile_img_src = this.getSafeUrl(this.apiService.API_URL + "media?profile=" + true + "&username=" + tweet.creator_username);
              newTweet.img_src = this.getSafeUrl(this.apiService.API_URL + "media?ID=" + tweet._id);
              this.apiService.loadData();
              if (newTweet.creator_ID == this.apiService.user._id)
                newTweet.showDelete = true;
              this.tweets.push(newTweet);
              this.cdRef.detectChanges();
            } else
              first = false;
          });
          if (tweets[tweets.length - 1] != null)
            this.last_ID = tweets[tweets.length - 1]._id;
          this.loading = false;
        } else {
          console.log(res.msg);
        }
      })
    })
  }

  deleteTweet(ID) {
    this.apiService.deleteTweet(ID).subscribe((data: any) => {
      this.tweets = <Tweet[]>[];
      this.cdRef.detectChanges();
      this.getTweetList(null, 5);
    });
  }

  timeSince(date) {
    var seconds = Math.floor(((new Date().valueOf() / 1000) - (date.valueOf() / 1000)));
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + "y";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + "m";

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + "d";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + "h";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + "m ";

    return Math.floor(seconds) + "s";
  }

  mediaButtonClicked() {
    console.log(this.progress);
    if (this.progress <= 0) {
      this.fileElement.nativeElement.click();
    } else {
      this.validationError = true;
      this.validationErrorMessage = "Already sending one media!";
      this.cdRef.detectChanges();
    }
  }

  onSubmit(fileInput) {
    var fileToUpload = <File>fileInput.target.files[0];
    console.log(fileToUpload.type == "image/gif");

    if (fileToUpload.type == "image/png" || fileToUpload.type == "image/jpg" ||
      fileToUpload.type == "image/jpeg" || fileToUpload.type == "image/gif" ||
      fileToUpload.type == "video/mp4" || fileToUpload.type == "audio/mp3" ||
      fileToUpload.type == "video/webm" || fileToUpload.type == "video/ogg" ||
      fileToUpload.type == "audio/wav" || fileToUpload.type == "audio/ogg") {
      const formData = new FormData();
      formData.set("media", fileToUpload);
      this.apiService.sendMediaTweet(formData).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            if (!event.body.success) {
              this.validationError = true;
              this.validationErrorMessage = event.body.msg;
              this.cdRef.detectChanges();
            } else {
              window.location.reload();
            }
        }
      });
    } else {
      this.validationError = true;
      this.validationErrorMessage = "Allowed only .png, .jpg, .jpeg .gif .mp4 .webm .ogg .ogg .wav .mp3";
      this.cdRef.detectChanges();
    }

  }

  getSafeUrl(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
