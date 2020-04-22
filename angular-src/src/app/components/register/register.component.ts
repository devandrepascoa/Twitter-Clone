import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  validationError:boolean;
  validationErrorMessage:String;

  constructor(private authService: ApiService,
    private validateService: ValidateService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

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

    this.authService.registerUser(user).subscribe((data : any) => {
      if (data.success) {
        this.router.navigate(["/login"]);
      } else {
        this.validationError = true;
        this.validationErrorMessage = data.msg;
        this.router.navigate(["/register"]);
      }
    });

  }

}
