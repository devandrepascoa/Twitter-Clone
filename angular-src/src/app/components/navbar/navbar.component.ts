import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: ApiService,
    private router: Router) { }


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
    } else {
      return false;
    }
  }

  onProfileClick() {
    this.authService.loadData();
    this.authService.retrieveUser(this.authService.authToken).subscribe((res: any) => {
      if (!res.success) {
        this.router.navigate(["/login"])
      } else {
        var user = JSON.parse(res.user);
        if (user.role == "Admin" || user.role == "Moderator") {
          localStorage.setItem("user_data", res.user);
        } else {
          localStorage.setItem("user_data", res.user);
        }
      }
    })
    this.router.navigate(["/user/" + this.authService.user.username]).then((success) => {
      if (success) {
      }
    });
  }

}
