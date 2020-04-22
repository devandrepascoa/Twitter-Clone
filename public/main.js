(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main-container\">\r\n    <div class=\"container-fluid\">\r\n        <br>\r\n        <form (submit)=\"sendTweet()\" name=\" tweetForm\" class=\"mx-auto form-group\">\r\n            <label class=\"label\">Tweet</label>\r\n            <textarea (ngModelChange)=\"contentChanged($event)\" [(ngModel)]=\"tweetContent\" name=\"tweetContent\"\r\n                type=\"text\" rows=\"3\" class=\"form-control\"></textarea>\r\n            <br>\r\n            <label class=\"countdown ml-auto\">{{countdown}} characters remaining</label>\r\n            <div class=\"container text-center\">\r\n                <button type=\"submit\" class=\"button_parrot btn btn-primary btn-lg\" style=\"margin-right: 1em;\">Send\r\n                    Parrot!</button>\r\n                <button type=\"button\" class=\"button_media btn btn-secondary btn-lg\" (click)=\"mediaButtonClicked()\"><i\r\n                        class=\"fas fa-photo-video\"></i></button>\r\n                <input\r\n                    accept=\"image/png,image/jpeg,image/jpg,image/gif,video/mp4,video/webm,audio/mpeg,audio/ogg,audio/wav\"\r\n                    type=\"file\" #my_file style=\"display: none; \" (change)=\"onSubmit($event)\" />\r\n            </div>\r\n            <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\" [style.width.%]=\"progress\">\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"validationError\" class=\"alert alert-danger\">\r\n                {{ validationErrorMessage }}\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"tweet-container container\">\r\n        <div #tweets class=\"list-group\" *ngFor=\"let tweet of tweets\">\r\n            <div attr.data-internal-id=\"{{tweet._id}}\" class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                    <img class=\"profile-img\" [src]=\"tweet.profile_img_src\"\r\n                        onError=\"this.src='../../../assets/images/the-parrot-place.jpg'\" alt=\"\">\r\n                    <div class=\"row username-div\">\r\n                        <a class=\"username\" href=\"/user/{{tweet.creator_username}}\">\r\n                            <h1 class=\"col username-text\" style=\"margin:0\"> {{tweet.name}}</h1>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <p *ngIf=\"tweet.type == 1\" class=\"lead\"> {{tweet.content}}</p>\r\n                <img *ngIf=\"tweet.type == 2\" class=\"img-fluid\" [src]=\"tweet.img_src\">\r\n\r\n                <div *ngIf=\"tweet.type == 3\" class=\"embed-responsive embed-responsive-16by9\">\r\n                    <video [src]=\"tweet.img_src\" controls>\r\n                    </video>\r\n                </div>\r\n                <div *ngIf=\"tweet.type == 4\">\r\n                    <audio style=\"width:100%;\" controls>\r\n                        <source [src]=\"tweet.img_src\" type=\"audio/ogg\">\r\n                        Your browser does not support the audio element.\r\n                    </audio>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <small style=\"margin-left:1em;margin-right: 2em\">Date created: {{tweet.date_created}}</small>\r\n                    <input *ngIf=\"tweet.showDelete\" type=\"button\" (click)=\"deleteTweet(tweet._id)\" value=\"Delete\"\r\n                        style=\"margin-right: 2em;\" class=\"btn btn-danger ml-auto\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p class=\"text-center\" #loadMore>Loading...</p>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-register/google-register.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-register/google-register.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2 class=\"page-header\">Register</h2>\n    <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n        {{ validationErrorMessage }}\n    </div>\n    <form (submit)=\"onRegisterSubmit()\">\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter Username\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"\n                placeholder=\"Enter Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google/google.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google/google.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"text-center\">\n        <h1>Do you want to associate your account?</h1>\n        <h4>Email: {{email}}</h4>\n        <button class=\"btn btn-primary btn-lg\">Sure!</button>\n        <div class=\"error-actions\" style=\"margin-top: 1em;\">\n            <a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg\">\n                Take Me Home </a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron bg-white\">\n        <h1 class=\"display-4\">Parreter App! 🦜</h1>\n        <hr class=\"my-4\">\n        <p>To proceed select one of the below buttons!</p>\n        <div class=\"row justify-content-md\">\n            <div class=\"col-md-0 px-3\">\n                <p [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"lead\">\n                    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/register']\" role=\"button\">Register</a>\n                </p>\n            </div>\n            <div class=\"col-md-0 px-3\">\n                <p [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"lead\">\n                    <a class=\"btn btn-secondary btn-lg\" [routerLink]=\"['/login']\" role=\"button\">Login</a>\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">   \n        <div class=\"col-md-3\">\n            <h3>Express</h3>\n            <p>Express.js server as the backend, fast and reliable performance</p>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>Angular</h3>\n            <p>Angular frontend, based on Typescript, reliable and provides fast development </p>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>JWT</h3>\n            <p>Json web tokens for authentication</p>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>MongoDB</h3>\n            <p>Document based database, for storing the userData</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2 class=\"page-header\">Login</h2>\n    <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n        {{ validationErrorMessage }}\n    </div>\n    <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter Username\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"\n                placeholder=\"Enter Password\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <a href=\"http://localhost/api/auth/google\">\n            <button id=\"google\" type=\"button\"  class=\"btn\">\n                <i class=\"fab fa-google\"></i> Sign in with Google\n            </button>\n        </a>\n        \n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management-edit/management-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/management-edit/management-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <br>\n    <h2>Editing User: <a class=\"username\" href=\"/user/{{username}}\">@{{username}}</a></h2>\n    <ul ngbNav #nav=\"ngbNav\" style=\"margin-top: 2em;\" [(activeId)]=\"active\" class=\"nav-tabs\">\n        <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Name</a>\n            <ng-template ngbNavContent>\n                <br>\n                <form (submit)=\"onChangeName()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\"\n                            placeholder=\"Enter New Name\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n                <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n                    {{ validationErrorMessage }}\n                </div>\n            </ng-template>\n        </li>\n        <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Username</a>\n            <ng-template ngbNavContent>\n                <br>\n                <form (submit)=\"onChangeName()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\"\n                            placeholder=\"Enter New Username\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n                <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n                    {{ validationErrorMessage }}\n                </div>\n            </ng-template>\n        </li>\n        <li [ngbNavItem]=\"3\">\n            <a ngbNavLink>Email</a>\n            <ng-template ngbNavContent>\n                <br>\n                <form (submit)=\"onChangeName()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"\n                            placeholder=\"Enter New Email: noreply@gmail.com\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n                <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n                    {{ validationErrorMessage }}\n                </div>\n            </ng-template>\n        </li>\n        <li [ngbNavItem]=\"4\">\n            <a ngbNavLink>Permissions</a>\n            <ng-template ngbNavContent>\n                <p class=\"lead\">    Role: {{role}}</p>\n                <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n                    {{ validationErrorMessage }}\n                </div>\n            </ng-template>\n        </li>\n    </ul>\n\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      User management\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Username</th>\n            <th scope=\"col\">Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.name}}</td>\n            <a class=\"username\" href=\"/user/{{user.username}}\">\n              <td>@{{user.username}}</td>\n            </a>\n            <td>{{user.email}}</td>\n            <td>\n              <a href=\"/management_edit/{{user.username}}\"> <button class=\"btn btn-primary\" >Edit</button></a>\n              <button class=\"btn btn-danger\" (click)=\"deleteUser(user.username)\"\n                style=\"margin-left: 1em;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n      {{ validationErrorMessage }}\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n    <h1>Parreter!</h1>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">DashBoard</a>\n      </li>\n      <li *ngIf=\"loggedIn() && HighLevelPermissions()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/management']\">Management</a>\n      </li>\n      <li *ngIf=\"loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"onProfileClick()\">Profile</a>\n      </li>\n      <li *ngIf=\"!loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li *ngIf=\"!loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n        class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li *ngIf=\"loggedIn()\" class=\"nav-item \">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"profile-container col-md-12 col-lg-4\">\n            <div class=\"picContainer text-center\">\n                <div *ngIf=\"myProfile\" class=\"overlay\" (click)=\"profilePicClicked()\">\n                    <div class=\"text\">Edit Pic</div>\n                </div>\n                <img id=\"profilePic\" [src]=\"profilePic\" onError=\"this.src='../../../assets/images/the-parrot-place.jpg'\"\n                    alt=\"Avatar\">\n            </div>\n            <input accept=\"image/png,image/jpeg,image/jpg\" type=\"file\" #my_file style=\"display: none; \"\n                (change)=\"onSubmit($event)\" />\n            <div class=\"progress form-group\" *ngIf=\"progress > 0\">\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\"\n                    [style.width.%]=\"progress\">\n                </div>\n            </div>\n            <div id=\"profile-info\" *ngIf=\"user\">\n                <h2 class=\"page-header\">{{user.name}}</h2>\n                <p class=\"lead\">@{{user.username}}</p>\n            </div>\n            <div *ngIf=\"!myProfile && followed != null\" class=\"text-center\">\n                <button *ngIf=\"!followed\" (click)=\"follow()\" class=\"btn btn-primary btn-lg\">Follow!</button>\n                <button *ngIf=\"followed\" (click)=\"unfollow()\" class=\"btn btn-primary btn-lg\">Unfollow</button>\n            </div>\n            <img *ngIf=\"userRole == 'Moderator'\" height=\"42\" width=\"42\" src=\"../../../assets/images/Modpin.png\" alt=\"ModeratorPin\">\n            <img *ngIf=\"userRole == 'Admin'\" height=\"42\" width=\"42\" src=\"../../../assets/images/crown-jewel-reward-winner-512.png\" alt=\"AdminPin\">\n\n            <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n                {{ validationErrorMessage }}\n            </div>\n        </div>\n        <div class=\"main-tweet-container col-md-12 col-lg-6\">\n            <h1 class=\"display-4 text-center\">Tweets!</h1>\n            <div class=\"tweet-container container mx-auto\">\n                <div #tweets class=\"list-group\" *ngFor=\"let tweet of tweets\">\n                    <div attr.data-internal-id=\"{{tweet._id}}\" class=\"list-group-item\">\n                        <div class=\"row\">\n                            <img class=\"profile-img\" [src]=\"tweet.profile_img_src\"\n                                onError=\"this.src='../../../assets/images/the-parrot-place.jpg'\" alt=\"\">\n                            <h1> {{tweet.name}}</h1>\n                        </div>\n                        <p *ngIf=\"tweet.type == 1\" class=\"lead\"> {{tweet.content}}</p>\n                        <img *ngIf=\"tweet.type == 2\" class=\"img-fluid\" [src]=\"tweet.img_src\">\n\n                        <div *ngIf=\"tweet.type == 3\" class=\"embed-responsive embed-responsive-16by9\">\n                            <video [src]=\"tweet.img_src\" controls>\n                            </video>\n                        </div>\n                        <div *ngIf=\"tweet.type == 4\">\n                            <audio style=\"width:100%;\" controls>\n                                <source [src]=\"tweet.img_src\" type=\"audio/ogg\">\n                                Your browser does not support the audio element.\n                            </audio>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <small style=\"margin-left:1em;margin-right: 2em\">Date created:\n                                {{tweet.date_created}}</small>\n                            <input *ngIf=\"tweet.showDelete\" type=\"button\" (click)=\"deleteTweet(tweet._id)\"\n                                value=\"Delete\" style=\"margin-right: 2em;\" class=\"btn btn-danger ml-auto\">\n                        </div>\n                    </div>\n                </div>\n                <p class=\"text-center\" #loadMore>Loading...</p>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2 class=\"page-header\">Register</h2>\n    <div *ngIf=\"validationError\" class=\"alert alert-danger\">\n        {{ validationErrorMessage }}\n    </div>\n    <form (submit)=\"onRegisterSubmit()\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter Username\">\n        </div>\n        <div class=\"form-group\">\n            <label>Email Address</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"\n                placeholder=\"Enter Password\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_google_register_google_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/google-register/google-register.component */ "./src/app/components/google-register/google-register.component.ts");
/* harmony import */ var _components_google_google_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/google/google.component */ "./src/app/components/google/google.component.ts");
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/permission.guard */ "./src/app/guards/permission.guard.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/components/management/management.component.ts");
/* harmony import */ var _components_management_edit_management_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/management-edit/management-edit.component */ "./src/app/components/management-edit/management-edit.component.ts");















const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'google/:token', component: _components_google_google_component__WEBPACK_IMPORTED_MODULE_11__["GoogleComponent"] },
    { path: 'google_register/:userData', component: _components_google_register_google_register_component__WEBPACK_IMPORTED_MODULE_10__["GoogleRegisterComponent"] },
    { path: 'user/:username', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'management', component: _components_management_management_component__WEBPACK_IMPORTED_MODULE_13__["ManagementComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_12__["PermissionGuard"]], data: { roles: ["Admin", "Moderator"] } },
    { path: 'management_edit/:username', component: _components_management_edit_management_edit_component__WEBPACK_IMPORTED_MODULE_14__["ManagementEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_12__["PermissionGuard"]], data: { roles: ["Admin", "Moderator"] } },
    { path: '404', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\nhtml, body {\n  font-family: \"Poppins\", sans-serif;\n  color: #222;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbmRyZXBhc2NvYVxcR29vZ2xlIERyaXZlXFxQUk9KRVRPU1xcdHdpdHRlcl9jbG9uZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBFQUFBO0FBQ0Esa0ZBQUE7QUFFUjtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNTAwLDcwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-src';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_google_register_google_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/google-register/google-register.component */ "./src/app/components/google-register/google-register.component.ts");
/* harmony import */ var _components_google_google_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/google/google.component */ "./src/app/components/google/google.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/components/management/management.component.ts");
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/permission.guard */ "./src/app/guards/permission.guard.ts");
/* harmony import */ var _components_management_edit_management_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/management-edit/management-edit.component */ "./src/app/components/management-edit/management-edit.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
            _components_google_register_google_register_component__WEBPACK_IMPORTED_MODULE_17__["GoogleRegisterComponent"],
            _components_google_google_component__WEBPACK_IMPORTED_MODULE_18__["GoogleComponent"],
            _components_management_management_component__WEBPACK_IMPORTED_MODULE_19__["ManagementComponent"],
            _components_management_edit_management_edit_component__WEBPACK_IMPORTED_MODULE_21__["ManagementEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_20__["PermissionGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Tweet.ts":
/*!*************************************!*\
  !*** ./src/app/components/Tweet.ts ***!
  \*************************************/
/*! exports provided: Tweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tweet", function() { return Tweet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Tweet {
}


/***/ }),

/***/ "./src/app/components/User.ts":
/*!************************************!*\
  !*** ./src/app/components/User.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n.profile-img {\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);\n  margin-right: 2em;\n  margin: 1em;\n}\n\n.progress {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.img-fluid {\n  max-width: 500px;\n  width: 100%;\n}\n\n.username {\n  color: BLACK;\n  text-decoration: none;\n  margin-left: 20px;\n}\n\n.username:hover {\n  text-decoration: underline;\n}\n\n.list-group {\n  word-break: break-all;\n  overflow: hidden;\n}\n\n.countdown {\n  margin-top: 0.5em;\n  float: right;\n}\n\n@media (max-width: 500px) {\n  .main-container {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .tweet-container {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .username-div {\n    text-align: center;\n  }\n\n  .username-text {\n    font-size: 20px;\n    padding: 0;\n    padding-top: 25px;\n    padding-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxhbmRyZXBhc2NvYVxcR29vZ2xlIERyaXZlXFxQUk9KRVRPU1xcdHdpdHRlcl9jbG9uZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0ksMEJBQUE7QUNHSjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0U7SUFDSSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNHSjs7RUREQTtJQUNFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0lGOztFREZBO0lBQ0Usa0JBQUE7RUNLRjs7RURIQTtJQUNJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ01KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogM2VtO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgbWFyZ2luOiAxZW07XHJcbn1cclxuLnByb2dyZXNze1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgY29sb3I6IEJMQUNLO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnVzZXJuYW1lOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb3VudGRvd24ge1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLm1haW4tY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAudHdlZXQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAudXNlcm5hbWUtZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudXNlcm5hbWUtdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MjVweDtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybmFtZSB7XG4gIGNvbG9yOiBCTEFDSztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVzZXJuYW1lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY291bnRkb3duIHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGZsb2F0OiByaWdodDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAudHdlZXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC51c2VybmFtZS1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC51c2VybmFtZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tweet */ "./src/app/components/Tweet.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let DashboardComponent = class DashboardComponent {
    constructor(apiService, validateService, router, cdRef, sanitizer) {
        this.apiService = apiService;
        this.validateService = validateService;
        this.router = router;
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.tweets = [];
        this.progress = 0;
        this.loading = false;
        this.last_ID = null;
        this.countdown = 140;
        this.validationError = false;
    }
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
        }
        else {
            if (this.tweetContent.length > 140) {
                this.validationError = true;
                this.validationErrorMessage = "Parret can't possess more than 140 characters!";
            }
            else {
                this.validationError = false;
                this.apiService.sendTweet({ content: this.tweetContent }).subscribe((res) => {
                    if (res.success) {
                        this.tweets = [];
                        this.cdRef.detectChanges();
                        this.getTweetList(null, 5);
                        console.log(res);
                    }
                    else
                        console.log(res.msg);
                });
                this.tweetContent = "";
            }
        }
    }
    getTweetList(ID, limit) {
        this.apiService.getFollowing().subscribe((res) => {
            var following = JSON.parse(res.following);
            this.apiService.loadData();
            if (following != null) {
                following.push(this.apiService.user.username);
            }
            else {
                following = [this.apiService.user.username];
            }
            this.apiService.getTweets(ID, limit, following).subscribe((res) => {
                if (res.success) {
                    var tweets = JSON.parse(res.tweets);
                    if (ID != null)
                        var first = true;
                    else
                        var first = false;
                    tweets.forEach(tweet => {
                        if (!first) {
                            var newTweet = new _Tweet__WEBPACK_IMPORTED_MODULE_5__["Tweet"]();
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
                        }
                        else
                            first = false;
                    });
                    if (tweets[tweets.length - 1] != null)
                        this.last_ID = tweets[tweets.length - 1]._id;
                    this.loading = false;
                }
                else {
                    console.log(res.msg);
                }
            });
        });
    }
    deleteTweet(ID) {
        this.apiService.deleteTweet(ID).subscribe((data) => {
            this.tweets = [];
            this.cdRef.detectChanges();
            this.getTweetList(null, 5);
        });
    }
    timeSince(date) {
        var seconds = Math.floor(((new Date().valueOf() / 1000) - (date.valueOf() / 1000)));
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1)
            return interval + "y";
        interval = Math.floor(seconds / 2592000);
        if (interval > 1)
            return interval + "m";
        interval = Math.floor(seconds / 86400);
        if (interval >= 1)
            return interval + "d";
        interval = Math.floor(seconds / 3600);
        if (interval >= 1)
            return interval + "h";
        interval = Math.floor(seconds / 60);
        if (interval > 1)
            return interval + "m ";
        return Math.floor(seconds) + "s";
    }
    mediaButtonClicked() {
        console.log(this.progress);
        if (this.progress <= 0) {
            this.fileElement.nativeElement.click();
        }
        else {
            this.validationError = true;
            this.validationErrorMessage = "Already sending one media!";
            this.cdRef.detectChanges();
        }
    }
    onSubmit(fileInput) {
        var fileToUpload = fileInput.target.files[0];
        console.log(fileToUpload.type == "image/gif");
        if (fileToUpload.type == "image/png" || fileToUpload.type == "image/jpg" ||
            fileToUpload.type == "image/jpeg" || fileToUpload.type == "image/gif" ||
            fileToUpload.type == "video/mp4" || fileToUpload.type == "audio/mp3" ||
            fileToUpload.type == "video/webm" || fileToUpload.type == "video/ogg" ||
            fileToUpload.type == "audio/wav" || fileToUpload.type == "audio/ogg") {
            const formData = new FormData();
            formData.set("media", fileToUpload);
            this.apiService.sendMediaTweet(formData).subscribe((event) => {
                switch (event.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Sent:
                        console.log('Request has been made!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].ResponseHeader:
                        console.log('Response header has been received!');
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                        this.progress = Math.round(event.loaded / event.total * 100);
                        console.log(`Uploaded! ${this.progress}%`);
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                        if (!event.body.success) {
                            this.validationError = true;
                            this.validationErrorMessage = event.body.msg;
                            this.cdRef.detectChanges();
                        }
                        else {
                            window.location.reload();
                        }
                }
            });
        }
        else {
            this.validationError = true;
            this.validationErrorMessage = "Allowed only .png, .jpg, .jpeg .gif .mp4 .webm .ogg .ogg .wav .mp3";
            this.cdRef.detectChanges();
        }
    }
    getSafeUrl(src) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loadMore", { static: false })
], DashboardComponent.prototype, "loadMoreElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("my_file", { static: false })
], DashboardComponent.prototype, "fileElement", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/google-register/google-register.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/google-register/google-register.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29vZ2xlLXJlZ2lzdGVyL2dvb2dsZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/google-register/google-register.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/google-register/google-register.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleRegisterComponent", function() { return GoogleRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");





let GoogleRegisterComponent = class GoogleRegisterComponent {
    constructor(route, apiService, router, validateService) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.validateService = validateService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(map => {
            this.userData = map.get("userData");
            this.userData = JSON.parse(this.userData);
        });
    }
    onRegisterSubmit() {
        const user = {
            google_ID: this.userData.google_ID,
            name: this.userData.name,
            username: this.username,
            email: this.userData.email,
            password: this.password,
        };
        if (!this.validateService.validateGoogle(user)) {
            this.validationError = true;
            this.validationErrorMessage = "Email is not valid";
        }
        else {
            this.apiService.registerUser(user).subscribe((data) => {
                console.log(data.success);
                if (data.success) {
                    this.router.navigate(["/login"]);
                }
                else {
                    this.validationError = true;
                    this.validationErrorMessage = data.msg;
                }
            });
        }
    }
};
GoogleRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"] }
];
GoogleRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-register/google-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-register.component.scss */ "./src/app/components/google-register/google-register.component.scss")).default]
    })
], GoogleRegisterComponent);



/***/ }),

/***/ "./src/app/components/google/google.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/google/google.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/google/google.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/google/google.component.ts ***!
  \*******************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let GoogleComponent = class GoogleComponent {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(map => {
            this.data = JSON.parse(map.get("token"));
            console.log(this.data);
            if (!this.data.associate) {
                if (this.data.token != null) {
                    this.apiService.retrieveUser(this.data.token).subscribe((res) => {
                        if (!res.success) {
                            console.log("Couldn't retrieve user, token error");
                            this.router.navigate(["/login"]);
                        }
                        else {
                            this.apiService.storeToken(this.data.token, JSON.parse(res.user));
                            this.router.navigate(["/dashboard"]);
                        }
                    });
                }
            }
            else {
                this.email = this.data.email;
            }
        });
    }
};
GoogleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google/google.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google.component.scss */ "./src/app/components/google/google.component.scss")).default]
    })
], GoogleComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#google {\n  background: #dd4b39;\n  color: white;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGFuZHJlcGFzY29hXFxHb29nbGUgRHJpdmVcXFBST0pFVE9TXFx0d2l0dGVyX2Nsb25lXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ29vZ2xle1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjFlbTtcclxufSIsIiNnb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, validateService, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        try {
            const user = {
                username: this.username,
                password: this.password
            };
            if (!this.validateService.validateAuthentication(user)) {
                this.validationError = true;
                this.validationErrorMessage = "Fill all the fields";
                return false;
            }
            this.authService.authenticateUser(user).subscribe((data) => {
                if (data.success) {
                    this.authService.storeToken(data.token, data.user);
                    this.router.navigate(["/dashboard"]);
                }
                else {
                    this.validationError = true;
                    this.validationErrorMessage = data.msg;
                    this.router.navigate(["/login"]);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/management-edit/management-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/management-edit/management-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".username {\n  color: BLACK;\n  text-decoration: none;\n  margin-left: 20px;\n}\n\n.username:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VtZW50LWVkaXQvQzpcXFVzZXJzXFxhbmRyZXBhc2NvYVxcR29vZ2xlIERyaXZlXFxQUk9KRVRPU1xcdHdpdHRlcl9jbG9uZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hbmFnZW1lbnQtZWRpdFxcbWFuYWdlbWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZW1lbnQtZWRpdC9tYW5hZ2VtZW50LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlbWVudC1lZGl0L21hbmFnZW1lbnQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VybmFtZSB7XHJcbiAgICBjb2xvcjogQkxBQ0s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJuYW1lOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICAiLCIudXNlcm5hbWUge1xuICBjb2xvcjogQkxBQ0s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi51c2VybmFtZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/management-edit/management-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/management-edit/management-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManagementEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementEditComponent", function() { return ManagementEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ManagementEditComponent = class ManagementEditComponent {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.active = 1;
        this.validationError = false;
        this.validationErrorMessage = "";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(map => {
            this.username = map.get("username");
            this.apiService.getProfile(this.username).subscribe((data) => {
                this.name = data.user.name;
                this.email = data.user.email;
                this.role = data.user.role;
            });
        });
    }
    onChangeName() {
    }
    onChangeUsername() {
    }
    onChangeEmail() {
    }
    onChangePermissions() {
    }
};
ManagementEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ManagementEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management-edit/management-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management-edit.component.scss */ "./src/app/components/management-edit/management-edit.component.scss")).default]
    })
], ManagementEditComponent);



/***/ }),

/***/ "./src/app/components/management/management.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/management/management.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".username {\n  color: BLACK;\n  text-decoration: none;\n  margin-left: 20px;\n}\n\n.username:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VtZW50L0M6XFxVc2Vyc1xcYW5kcmVwYXNjb2FcXEdvb2dsZSBEcml2ZVxcUFJPSkVUT1NcXHR3aXR0ZXJfY2xvbmVcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYW5hZ2VtZW50XFxtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZW1lbnQvbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VtZW50L21hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcm5hbWUge1xyXG4gIGNvbG9yOiBCTEFDSztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VybmFtZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIiwiLnVzZXJuYW1lIHtcbiAgY29sb3I6IEJMQUNLO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udXNlcm5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/management/management.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/management/management.component.ts ***!
  \***************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/app/components/User.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManagementComponent = class ManagementComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.users = [];
        this.validationError = false;
        this.validationErrorMessage = "";
    }
    ngOnInit() {
        this.apiService.loadData();
        this.apiService.retrieveUser(this.apiService.authToken).subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/login"]);
            }
            else {
                var user = JSON.parse(res.user);
                localStorage.setItem("user_data", res.user);
                if (user.role == "Admin" || user.role == "Moderator") {
                }
                else {
                    this.router.navigate(["/dashboard"]);
                }
            }
        });
        this.retrieveUsers();
    }
    deleteUser(username) {
        console.log(username);
        this.apiService.deleteUser(username).subscribe((res) => {
            if (res.success) {
                this.retrieveUsers();
            }
            else {
                this.validationError = true;
                this.validationErrorMessage = res.msg;
            }
        });
    }
    retrieveUsers() {
        this.apiService.retrieveUsers().subscribe((res) => {
            console.log(res);
            if (!res.success) {
                this.validationError = true;
                this.validationErrorMessage = res.msg;
            }
            else {
                this.users = [];
                for (var i = 0; i < res.users.length; i++) {
                    var user = new _User__WEBPACK_IMPORTED_MODULE_2__["User"];
                    user.name = res.users[i].name;
                    user.username = res.users[i].username;
                    user.email = res.users[i].email;
                    this.users.push(user);
                }
            }
        });
    }
};
ManagementComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.scss */ "./src/app/components/management/management.component.scss")).default]
    })
], ManagementComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,500,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n.navbar {\n  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);\n}\n.navbar-brand {\n  font-family: \"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive;\n}\n.profile:hover {\n  cursor: pointer;\n  cursor: hand;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhbmRyZXBhc2NvYVxcR29vZ2xlIERyaXZlXFxQUk9KRVRPU1xcdHdpdHRlcl9jbG9uZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFDQSxrRkFBQTtBQUVSO0VBQ0ksNkNBQUE7QUNBSjtBREdBO0VBQ0ksMEVBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNTAwLDcwMCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm5hdmJhcntcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gfVxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gU2NyaXB0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgY3Vyc2l2ZTtcclxufVxyXG5cclxuLnByb2ZpbGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwXCIpO1xuLm5hdmJhciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gU2NyaXB0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgY3Vyc2l2ZTtcbn1cblxuLnByb2ZpbGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(["/login"]);
        return false;
    }
    loggedIn() {
        return this.authService.loggedIn();
    }
    HighLevelPermissions() {
        this.authService.loadData();
        if (this.authService.user.role == "Admin" || this.authService.user.role == "Moderator") {
            return true;
        }
        else {
            return false;
        }
    }
    onProfileClick() {
        this.authService.loadData();
        this.authService.retrieveUser(this.authService.authToken).subscribe((res) => {
            if (!res.success) {
                this.router.navigate(["/login"]);
            }
            else {
                var user = JSON.parse(res.user);
                if (user.role == "Admin" || user.role == "Moderator") {
                    localStorage.setItem("user_data", res.user);
                }
                else {
                    localStorage.setItem("user_data", res.user);
                }
            }
        });
        this.router.navigate(["/user/" + this.authService.user.username]).then((success) => {
            if (success) {
            }
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);\n}\n\n.error-template {\n  padding: 40px 15px;\n  text-align: center;\n}\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.error-actions .btn {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvQzpcXFVzZXJzXFxhbmRyZXBhc2NvYVxcR29vZ2xlIERyaXZlXFxQUk9KRVRPU1xcdHdpdHRlcl9jbG9uZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyw2b0JBQUE7QUNFUDs7QUREQTtFQUFpQixrQkFBQTtFQUFtQixrQkFBQTtBQ01wQzs7QURMQTtFQUFnQixnQkFBQTtFQUFnQixtQkFBQTtBQ1VoQzs7QURUQTtFQUFzQixrQkFBQTtBQ2F0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFCWjBSVmgwUTNKbFlYUnBiMjRnVkdsdFpRQXhNQzh5T1M4eE1pS3FxM2tBQUFBY2RFVllkRk52Wm5SM1lYSmxBRUZrYjJKbElFWnBjbVYzYjNKcmN5QkRVelZ4dGVNMkFBQUJIa2xFUVZSSWliMlZ5dzZFSUF4Rlc1aWRyLy8vUXg5c2ZHM3BMRXlKM3RBd2k1RW1CcVJvN3ZIYXdpRUVFUkhTNng3TVRNeE1WdjYrejN0UE1VWVNrZlRNL1IwZkVhRzJiYk12K0djNG5aem4rZE40SEFjUkVhM3IraGkzYmN1dTY4akxza2hWSWxXMDczdFdhWWxROStGOUlwcW1TZnErZndza2hkTy9Bd21VVEpYck91YVJRTmVSa09kNWxxN3JYbVM1SW5tRVJLb0VSL1FNdlVBUGxaREhjWlJoR040Q1NlR1krYUhNcWdja3M1UnJIdi9lZWg0NTV4NUtyTXEyeUhRZGliRE82bmNHL0taV0w3TTh4RHlTMS9NSU8wTkpxZFVMTFM4MVg2L1g2YVIwbnFCU0pjUGVabmxacnpONDc3TktVUm4yTnVzOHNqem1FSUkwVGZNaXl4VXV4cGhWV2pwSmtieDBidFVuc2hSaWhWdjcwQnY4SXRYcTZBc29pL1ppQ2JVNllnQUFBQUJKUlU1RXJrSmdnZz09KTt9XHJcbi5lcnJvci10ZW1wbGF0ZSB7cGFkZGluZzogNDBweCAxNXB4O3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5lcnJvci1hY3Rpb25zIHttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLmVycm9yLWFjdGlvbnMgLmJ0biB7IG1hcmdpbi1yaWdodDoxMHB4OyB9IiwiYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUJaMFJWaDBRM0psWVhScGIyNGdWR2x0WlFBeE1DOHlPUzh4TWlLcXEza0FBQUFjZEVWWWRGTnZablIzWVhKbEFFRmtiMkpsSUVacGNtVjNiM0pyY3lCRFV6Vnh0ZU0yQUFBQkhrbEVRVlJJaWIyVnl3NkVJQXhGVzVpZHIvLy9ReDlzZkczcExFeUozdEF3aTVFbUJxUm83dkhhd2lFRUVSSFM2eDdNVE14TVZ2Nit6M3RQTVVZU2tmVE0vUjBmRWFHMmJiTXYrR2M0blp6bitkTjRIQWNSRWEzcitoaTNiY3V1NjhqTHNraFZJbFcwNzN0V2FZbFE5K0Y5SXBxbVNmcStmd3NraGRPL0F3bVVUSlhyT3VhUlFOZVJrT2Q1bHE3clhtUzVJbm1FUktvRVIvUU12VUFQbFpESGNaUmhHTjRDU2VHWSthSE1xZ2NrczVSckh2L2VlaDQ1NXg1S3JNcTJ5SFFkaWJETzZuY0cvS1pXTDdNOHhEeVMxL01JTzBOSnFkVUxMUzgxWDYvWDZhUjBucUJTSmNQZVpubFpyek40NzdOS1VSbjJOdXM4c2p6bUVJSTBUZk1peXhVdXhwaFZXanBKa2J4MGJ0VW5zaFJpaFZ2NzBCdjhJdFhxNkFzb2kvWmlDYlU2WWdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xufVxuXG4uZXJyb3ItdGVtcGxhdGUge1xuICBwYWRkaW5nOiA0MHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXJyb3ItYWN0aW9ucyAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profilePic {\n  display: block;\n  border-radius: 50%;\n  width: 10rem;\n  height: 10rem;\n  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);\n}\n\n.picContainer {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.progress {\n  margin: 1em;\n}\n\n.picContainer:hover .overlay {\n  opacity: 1;\n}\n\n.img-fluid {\n  max-width: 300px;\n  width: 100%;\n}\n\n.overlay {\n  position: absolute;\n  border-radius: 50%;\n  width: 10rem;\n  height: 10rem;\n  opacity: 0;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  background-color: #0ca7bb;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.profile-container {\n  margin: 2rem;\n  border-right: 1px solid black;\n}\n\n.profile-img {\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);\n  margin-right: 2em;\n  margin: 1em;\n}\n\n@media (max-width: 992px) {\n  .profile-container {\n    margin: 2rem;\n    border-right: none;\n    padding-bottom: auto;\n    margin-bottom: auto;\n  }\n}\n\n.main-container {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.tweet-container {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.main-tweet-container {\n  padding: 0;\n}\n\n.list-group {\n  word-break: break-all;\n  overflow: hidden;\n}\n\n/*\nExtra small (xs) devices (portrait phones, less than 576px)\nNo media query since this is the default in Bootstrap\n\nSmall (sm) devices (landscape phones, 576px and up)\n@media (min-width: 576px) { ... }\n\nMedium (md) devices (tablets, 768px and up)\n@media (min-width: 768px) { ... }\n\nLarge (lg) devices (desktops, 992px and up)\n@media (min-width: 992px) { ... }\n\nExtra (xl) large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) { ... }\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcYW5kcmVwYXNjb2FcXEdvb2dsZSBEcml2ZVxcUFJPSkVUT1NcXHR3aXR0ZXJfY2xvbmVcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSx5QkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFFQSxnQ0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FEREE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZVBpYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5waWNDb250YWluZXIge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbjogMWVtO1xyXG59XHJcbi5waWNDb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTY3LCAxODcpO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB9XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4udHdlZXQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1haW4tdHdlZXQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qXHJcbkV4dHJhIHNtYWxsICh4cykgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbk5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwXHJcblxyXG5TbWFsbCAoc20pIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IC4uLiB9XHJcblxyXG5NZWRpdW0gKG1kKSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyAuLi4gfVxyXG5cclxuTGFyZ2UgKGxnKSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgLi4uIH1cclxuXHJcbkV4dHJhICh4bCkgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgLi4uIH1cclxuKi9cclxuIiwiI3Byb2ZpbGVQaWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogMTByZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5waWNDb250YWluZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9ncmVzcyB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4ucGljQ29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogMTByZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjYTdiYjtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDNlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBtYXJnaW46IDFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG59XG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udHdlZXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW4tdHdlZXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qXG5FeHRyYSBzbWFsbCAoeHMpIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxuTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXBcblxuU21hbGwgKHNtKSBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHsgLi4uIH1cblxuTWVkaXVtIChtZCkgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IC4uLiB9XG5cbkxhcmdlIChsZykgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyAuLi4gfVxuXG5FeHRyYSAoeGwpIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAuLi4gfVxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tweet */ "./src/app/components/Tweet.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let ProfileComponent = class ProfileComponent {
    constructor(apiService, router, cdRef, route, sanitizer) {
        this.apiService = apiService;
        this.router = router;
        this.cdRef = cdRef;
        this.route = route;
        this.sanitizer = sanitizer;
        this.followed = null;
        this.userRole = "User";
        this.progress = 0;
        this.tweets = [];
        this.validationError = false;
        this.loading = false;
        this.last_ID = null;
        this.username = null;
    }
    ngAfterViewInit() {
        this.route.paramMap.subscribe(map => {
            this.username = map.get("username");
            this.apiService.loadData();
            if (this.username == this.apiService.user.username) {
                this.myProfile = true;
            }
            else {
                this.myProfile = false;
            }
            this.cdRef.detectChanges();
        });
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
    onSubmit(fileInput) {
        if (this.progress <= 0) {
            var fileToUpload = fileInput.target.files[0];
            if (fileToUpload.type == "image/png" || fileToUpload.type == "image/jpg" || fileToUpload.type == "image/jpeg") {
                const formData = new FormData();
                formData.set('image', fileToUpload);
                this.apiService.changeProfilePic(formData).subscribe((event) => {
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Sent:
                            console.log('Request has been made!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].ResponseHeader:
                            console.log('Response header has been received!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress:
                            this.progress = Math.round(event.loaded / event.total * 100);
                            console.log(`Uploaded! ${this.progress}%`);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response:
                            if (!event.body.success) {
                                this.validationError = true;
                                this.validationErrorMessage = event.body.msg;
                            }
                            else {
                                window.location.reload();
                            }
                    }
                });
            }
            else {
                this.validationError = true;
                this.validationErrorMessage = "Allowed only .png, .jpg, .jpeg";
                this.cdRef.detectChanges();
            }
        }
        else {
            this.validationError = true;
            this.validationErrorMessage = "Already uploading image!";
            this.cdRef.detectChanges();
        }
    }
    getProfileData(reload) {
        this.apiService.getProfile(this.username).subscribe((profile) => {
            console.log(profile);
            this.user = profile.user;
            if (this.user == null) {
                this.router.navigate(["/404"]);
            }
            else {
                this.userRole = profile.user.role;
                this.apiService.getFollowing().subscribe((res) => {
                    if (res.success) {
                        var following = JSON.parse(res.following);
                        var happened = false;
                        following.forEach(entry => {
                            if (this.user.username.toString() == entry) {
                                happened = true;
                                this.cdRef.detectChanges();
                            }
                        });
                        this.followed = happened;
                    }
                    else {
                        this.validationError = true;
                        this.validationErrorMessage = res.msg;
                    }
                });
                if (reload)
                    window.location.reload();
            }
        }, err => {
            console.log(err);
            return false;
        });
        this.profilePic = this.getSafeUrl(this.apiService.API_URL + "media?profile=" + true + "&username=" + this.username);
        this.cdRef.detectChanges();
    }
    sendTweet() {
        this.apiService.sendTweet({ content: this.tweetContent }).subscribe((res) => {
            if (res.success) {
                this.tweets = [];
                this.cdRef.detectChanges();
                this.getTweetList(null, 5);
                console.log(res);
            }
            else
                console.log(res.msg);
        });
        this.tweetContent = "";
    }
    getTweetList(ID, limit) {
        this.apiService.getTweets(ID, limit, [this.username]).subscribe((res) => {
            if (res.success) {
                var tweets = JSON.parse(res.tweets);
                if (ID != null)
                    var first = true;
                else
                    var first = false;
                tweets.forEach(tweet => {
                    if (!first) {
                        var newTweet = new _Tweet__WEBPACK_IMPORTED_MODULE_4__["Tweet"]();
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
                    }
                    else
                        first = false;
                });
                if (tweets[tweets.length - 1] != null)
                    this.last_ID = tweets[tweets.length - 1]._id;
                this.loading = false;
            }
            else {
                console.log(res.msg);
            }
        });
    }
    deleteTweet(ID) {
        this.apiService.deleteTweet(ID).subscribe((data) => {
            window.location.reload();
        });
    }
    timeSince(date) {
        var seconds = Math.floor(((new Date().valueOf() / 1000) - (date.valueOf() / 1000)));
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1)
            return interval + "y";
        interval = Math.floor(seconds / 2592000);
        if (interval > 1)
            return interval + "m";
        interval = Math.floor(seconds / 86400);
        if (interval >= 1)
            return interval + "d";
        interval = Math.floor(seconds / 3600);
        if (interval >= 1)
            return interval + "h";
        interval = Math.floor(seconds / 60);
        if (interval > 1)
            return interval + "m ";
        return Math.floor(seconds) + "s";
    }
    profilePicClicked() {
        this.fileElement.nativeElement.click();
    }
    getSafeUrl(src) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src);
    }
    follow() {
        this.apiService.addFollower(this.user.username).subscribe((res) => {
            if (res.success) {
                this.followed = true;
            }
            else {
                this.validationError = true;
                this.validationErrorMessage = res.msg;
            }
        });
    }
    unfollow() {
        this.apiService.deleteFollower(this.user.username).subscribe((res) => {
            if (res.success) {
                this.followed = false;
            }
            else {
                this.validationError = true;
                this.validationErrorMessage = res.msg;
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loadMore", { static: false })
], ProfileComponent.prototype, "loadMoreElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("my_file", { static: false })
], ProfileComponent.prototype, "fileElement", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(authService, validateService, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.validationError = true;
            this.validationErrorMessage = "Fill all the fields";
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.validationError = true;
            this.validationErrorMessage = "Email is not valid";
            return false;
        }
        this.authService.registerUser(user).subscribe((data) => {
            if (data.success) {
                this.router.navigate(["/login"]);
            }
            else {
                this.validationError = true;
                this.validationErrorMessage = data.msg;
                this.router.navigate(["/register"]);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/permission.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/permission.guard.ts ***!
  \********************************************/
/*! exports provided: PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




let PermissionGuard = class PermissionGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var permittedRoles = route.data.roles;
            if (this.authService.loggedIn()) {
                this.authService.loadData();
                var res = yield this.authService.retrieveUser(this.authService.authToken).toPromise();
                if (!res.success) {
                    this.router.navigate(["/login"]);
                    return false;
                }
                else {
                    var user = JSON.parse(res.user);
                    var role = user.role;
                    localStorage.setItem("user_data", res.user);
                    for (var i = 0; i < permittedRoles.length; i++) {
                        if (permittedRoles[i] == role) {
                            return true;
                        }
                    }
                }
            }
            else {
                this.router.navigate(["/login"]);
                return false;
            }
            this.router.navigate(["/dashboard"]);
            return false;
        });
    }
};
PermissionGuard.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PermissionGuard);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.API_URL = "http://localhost/api/";
        // Http Headers
        this.normalHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /* RESOURCE API */
    sendTweet(tweet) {
        this.loadData();
        console.log(this.authToken);
        const mixedHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.post(this.API_URL + "tweet", tweet, mixedHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    deleteTweet(ID) {
        this.loadData();
        const authenticationHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.authToken
            })
        };
        return this.http.delete(`${this.API_URL + "tweet"}?ID=${ID}`, authenticationHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    deleteFollower(username) {
        this.loadData();
        const authenticationHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.authToken
            })
        };
        return this.http.delete(`${this.API_URL + "follow"}?username=${username}`, authenticationHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    addFollower(username) {
        this.loadData();
        return this.http.post(this.API_URL + "follow", { username: username }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getTweets(ID, limit, username) {
        return this.http.get(`${this.API_URL + "tweets"}?ID=${ID}&username=${username}&limit=${limit}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getTweetMedia(ID) {
        return this.http.get(`${this.API_URL + "media"}?ID=${ID}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    sendMediaTweet(formData) {
        this.loadData();
        return this.http.post(this.API_URL + "tweetMedia", formData, {
            reportProgress: true,
            observe: 'events',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    changeProfilePic(formData) {
        this.loadData();
        return this.http.post(this.API_URL + "changeProfilePic", formData, {
            reportProgress: true,
            observe: 'events',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    /* AUTHENTICATION API*/
    registerUser(user) {
        return this.http.post(this.API_URL + "register", user, this.normalHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    authenticateUser(user) {
        return this.http.post(this.API_URL + "authentication", user, this.normalHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getProfile(username) {
        return this.http.get(this.API_URL + "user/" + username, this.normalHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    deleteUser(username) {
        return this.http.delete(this.API_URL + "user/" + username, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem("id_token") })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    retrieveUser(accessToken) {
        return this.http.get(this.API_URL + "userFromToken", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': accessToken })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    retrieveUsers() {
        return this.http.get(this.API_URL + "users", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem("id_token") })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getFollowing() {
        this.loadData();
        return this.http.get(this.API_URL + "followers", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authToken })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    loadData() {
        var token = localStorage.getItem("id_token");
        var user = localStorage.getItem("user_data");
        this.authToken = token;
        this.user = JSON.parse(user);
    }
    loggedIn() {
        this.loadData();
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
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
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() {
        this.usernameIsValid = function (username) {
            if (username == null || username.length < 3 || username.length > 15 || username.includes(" "))
                return false;
            else
                return true;
        };
        this.nameIsValid = function (name) {
            if (name == null || name.length < 4 || name.length > 25)
                return false;
            else
                return true;
        };
        this.passwordIsValid = function (password) {
            if (password == null || password.length < 8 || password.length > 25 || password.includes(" "))
                return false;
            else
                return true;
        };
    }
    validateRegister(user) {
        if (user.name == null || user.username == null
            || user.email == null || user.password == null) {
            return false;
        }
        else {
            if (user.name.length > 0 && user.username.length > 0 && user.email.length > 0 && user.password.length > 0)
                return true;
            else
                return false;
        }
    }
    validateGoogle(user) {
        if (this.usernameIsValid(user.username) && this.passwordIsValid(user.password)) {
            return true;
        }
        else {
            return false;
        }
    }
    validateAuthentication(user) {
        if (user.username == null || user.password == null) {
            return false;
        }
        else {
            if (user.username.length > 0 && user.password.length > 0)
                return true;
            else
                return false;
        }
    }
    validateEmail(email) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andrepascoa\Google Drive\PROJETOS\twitter_clone\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map