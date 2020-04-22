import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  validationErrorMessage: string;
  validationError: boolean;

  constructor(private authService: ApiService,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    try {
      const user = {
        username: this.username,
        password: this.password
      }

      if (!this.validateService.validateAuthentication(user)) {
        this.validationError = true;
        this.validationErrorMessage = "Fill all the fields";
        return false;
      }

      this.authService.authenticateUser(user).subscribe((data: any) => {
        if (data.success) {
          this.authService.storeToken(data.token, data.user);
          this.router.navigate(["/dashboard"]);
        } else {
          this.validationError = true;
          this.validationErrorMessage = data.msg;
          this.router.navigate(["/login"]);
        }
      });

    } catch (error) {
      console.log(error);
    }

  }

}
