import { Component, AfterViewInit, ElementRef, ViewChild, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';
import { Tweet } from '../Tweet';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements AfterViewInit {
  user: {
    _id: Number,
    name: String,
    username: String,
    avatar: String
  }
  followed: boolean = null;
  userRole: string = "User";
  profilePic: SafeResourceUrl;
  progress: number = 0;
  @ViewChild("loadMore", { static: false }) loadMoreElement: ElementRef;
  @ViewChild("my_file", { static: false }) fileElement: ElementRef;
  tweets: Tweet[] = <Tweet[]>[];
  tweet: Tweet;
  validationError: boolean = false;
  validationErrorMessage: String;
  myProfile: boolean;
  loading = false;
  last_ID = null;
  username: String = null;
  tweetContent: String;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }


  ngAfterViewInit() {
    this.route.paramMap.subscribe(map => {
      this.username = map.get("username");
      this.apiService.loadData();
      if (this.username == this.apiService.user.username) {
        this.myProfile = true;
      } else {
        this.myProfile = false;
      }
      this.cdRef.detectChanges();
    })

    this.getProfileData(false);
    this.getTweetList(this.last_ID, 5);

    document.addEventListener('scroll', () => {
      const rect = this.loadMoreElement.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && !this.loading) {
        this.loading = true;
        this.getTweetList(this.last_ID, 5);
      }
    });
  }

  onSubmit(fileInput: any) {
    if (this.progress <= 0) {
      var fileToUpload = <File>fileInput.target.files[0];
      if (fileToUpload.type == "image/png" || fileToUpload.type == "image/jpg" || fileToUpload.type == "image/jpeg") {
        const formData = new FormData();
        formData.set('image', fileToUpload);
        this.apiService.changeProfilePic(formData).subscribe((event: HttpEvent<any>) => {

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
              } else {
                window.location.reload();
              }
          }
        });
      } else {
        this.validationError = true;
        this.validationErrorMessage = "Allowed only .png, .jpg, .jpeg";
        this.cdRef.detectChanges();
      }
    } else {
      this.validationError = true;
      this.validationErrorMessage = "Already uploading image!";
      this.cdRef.detectChanges();
    }
  }

  getProfileData(reload) {
    this.apiService.getProfile(this.username).subscribe((profile: any) => {
      console.log(profile);
      this.user = profile.user;
      if (this.user == null) {
        this.router.navigate(["/404"]);
      } else {
        this.userRole = profile.user.role;
        this.apiService.getFollowing().subscribe((res: any) => {
          if (res.success) {
            var following = <[]>JSON.parse(res.following);
            var happened = false;
            following.forEach(entry => {
              if (this.user.username.toString() == entry) {
                happened = true;
                this.cdRef.detectChanges();
              }
            });
            this.followed = happened;
          } else {
            this.validationError = true;
            this.validationErrorMessage = res.msg;
          }
        })
        if (reload)
          window.location.reload();
      }
    },
      err => {
        console.log(err);
        return false;
      });
    this.profilePic = this.getSafeUrl(this.apiService.API_URL + "media?profile=" + true + "&username=" + this.username);
    this.cdRef.detectChanges();
  }

  sendTweet() {
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

  getTweetList(ID, limit) {
    this.apiService.getTweets(ID, limit, [this.username]).subscribe((res: any) => {
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
            newTweet.creator_username = tweet.creator_username;
            newTweet.creator_ID = tweet.creator_ID;
            newTweet.name = tweet.name;
            newTweet.type = tweet.type;
            newTweet.date_created = this.timeSince(tweet.date_created);
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
  }

  deleteTweet(ID) {
    this.apiService.deleteTweet(ID).subscribe((data: any) => {
      window.location.reload();
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

  profilePicClicked() {
    this.fileElement.nativeElement.click();
  }

  getSafeUrl(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  follow() {
    this.apiService.addFollower(this.user.username).subscribe((res: any) => {
      if (res.success) {
        this.followed = true;
      } else {
        this.validationError = true;
        this.validationErrorMessage = res.msg;
      }
    })
  }
  unfollow() {
    this.apiService.deleteFollower(this.user.username).subscribe((res: any) => {
      if (res.success) {
        this.followed = false;
      } else {
        this.validationError = true;
        this.validationErrorMessage = res.msg;
      }
    })
  }
}
