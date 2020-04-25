import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  authToken: any;
  user: any;
  API_URL = "/api/";

  // Http Headers
  normalHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  /* RESOURCE API */
  sendTweet(tweet) {
    this.loadData();
    const mixedHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    }
    return this.http.post(this.API_URL + "tweet", tweet, mixedHeaders)
      .pipe(map(res => res));
  }

  deleteTweet(ID) {
    this.loadData();
    const authenticationHeaders = {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    }
    return this.http.delete(`${this.API_URL + "tweet"}?ID=${ID}`, authenticationHeaders).pipe(map(res => res));
  }

  deleteFollower(username) {
    this.loadData();
    const authenticationHeaders = {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    }
    return this.http.delete(`${this.API_URL + "follower"}?username=${username}`, authenticationHeaders).pipe(map(res => res));
  }

  addFollower(username) {
    this.loadData();
    return this.http.post(this.API_URL + "follower", { username: username }, {
      headers: new HttpHeaders({ 'Authorization': this.authToken })
    }).pipe(map(res => res));
  }

  getTweets(ID, limit, username) {
    return this.http.get(`${this.API_URL + "tweet"}?ID=${ID}&username=${username}&limit=${limit}`)
      .pipe(map(res => res));
  }

  getTweetMedia(ID) {
    return this.http.get(`${this.API_URL + "media"}?ID=${ID}`)
      .pipe(map(res => res));
  }

  sendMediaTweet(formData: FormData) {
    this.loadData();
    return this.http.post(this.API_URL + "media", formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({ 'Authorization': this.authToken },
      )
    }).pipe(map(res => res));
  }

  changeProfilePic(formData) {
    this.loadData();
    return this.http.put(this.API_URL + "user/" + this.user.username + "?type=AVATAR", formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({ 'Authorization': this.authToken })
    }).pipe(map(res => res));
  }

  changeUserData(username, data) {
    this.loadData();
    return this.http.put(this.API_URL + "user/" + username + "?type=USER_DATA", data, {
      headers: new HttpHeaders({ 'Authorization': this.authToken })
    }).pipe(map(res => res));
  }

  /* AUTHENTICATION API*/
  registerUser(user) {
    return this.http.post(this.API_URL + "register", user, this.normalHeaders)
      .pipe(map(res => res));
  }

  authenticateUser(user) {
    return this.http.post(this.API_URL + "authenticate", user, this.normalHeaders)
      .pipe(map(res => res));
  }

  getProfile(username) {
    return this.http.get(this.API_URL + "user/" + username, {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem("id_token") })
    })
      .pipe(map(res => res));
  }

  deleteUser(username) {
    return this.http.delete(this.API_URL + "user/" + username, {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem("id_token") })
    })
      .pipe(map(res => res));
  }

  retrieveUser(accessToken: string) {
    return this.http.get(this.API_URL + "user/from_token", {
      headers: new HttpHeaders({ 'Authorization': accessToken })
    })
      .pipe(map(res => res));
  }

  retrieveUsers() {
    return this.http.get(this.API_URL + "user/management", {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem("id_token") })
    })
      .pipe(map(res => res));
  }

  getFollowing() {
    this.loadData();
    return this.http.get(this.API_URL + "follower", {
      headers: new HttpHeaders({ 'Authorization': this.authToken })
    })
      .pipe(map(res => res));
  }

  loadData() {
    var token = localStorage.getItem("id_token");
    var user = localStorage.getItem("user_data");
    this.authToken = token;
    this.user = JSON.parse(user);
  }

  loggedIn() {
    this.loadData();
    const helper = new JwtHelperService();
    return (!helper.isTokenExpired(this.authToken));
  }

  storeToken(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user_data", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}