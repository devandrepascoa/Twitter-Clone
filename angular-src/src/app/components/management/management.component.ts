import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  users: User[] = <User[]>[];
  validationError: boolean = false;
  validationErrorMessage: string = "";
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.loadData();
    this.apiService.retrieveUser(this.apiService.authToken).subscribe((res: any) => {
      if (!res.success) {
        this.router.navigate(["/login"])
      } else {
        var user = JSON.parse(res.user);
        localStorage.setItem("user_data", res.user);
        if (user.role == "Admin" || user.role == "Moderator") {
        } else {
          this.router.navigate(["/dashboard"]);
        }
      }
    })
    this.retrieveUsers();

  }

  deleteUser(username: string) {
    console.log(username);
    this.apiService.deleteUser(username).subscribe((res: any) => {
      if (res.success) {
        this.retrieveUsers();
      } else {
        this.validationError = true;
        this.validationErrorMessage = res.msg;
      }
    })
  }

  retrieveUsers() {
    this.apiService.retrieveUsers().subscribe((res: any) => {
      console.log(res);
      if (!res.success) {
        this.validationError = true;
        this.validationErrorMessage = res.msg;
      } else {
        this.users = <User[]>[];
        for (var i = 0; i < res.users.length; i++) {
          var user = new User;
          user.name = res.users[i].name;
          user.username = res.users[i].username;
          user.email = res.users[i].email;
          this.users.push(user);
        }
      }
    })
  }

}
