import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { ApiService } from "../services/api.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: ApiService, private router: Router) {
    }

    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}