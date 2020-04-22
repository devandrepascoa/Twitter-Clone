import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { ApiService } from "../services/api.service";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private authService: ApiService, private router: Router) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var permittedRoles = <[]>route.data.roles;

        if (this.authService.loggedIn()) {
            this.authService.loadData();
            var res = <any>await this.authService.retrieveUser(this.authService.authToken).toPromise();
            if (!res.success) {
                this.router.navigate(["/login"]);
                return false;
            } else {
                var user = JSON.parse(res.user);
                var role = user.role;
                localStorage.setItem("user_data", res.user);
                for (var i = 0; i < permittedRoles.length; i++) {
                    if (permittedRoles[i] == role) {
                        return true;
                    }
                }
            }
        } else {
            this.router.navigate(["/login"]);
            return false;
        }

        this.router.navigate(["/dashboard"]);
        return false;
    }
}