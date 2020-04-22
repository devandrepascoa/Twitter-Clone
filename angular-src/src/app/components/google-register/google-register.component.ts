import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../services/api.service";
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-google-register',
  templateUrl: './google-register.component.html',
  styleUrls: ['./google-register.component.scss']
})
export class GoogleRegisterComponent implements OnInit {
  userData: any;
  username: String;
  password: String;
  validationError: boolean;
  validationErrorMessage: String;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private validateService: ValidateService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.userData = map.get("userData");
      this.userData = JSON.parse(this.userData);
    })
  }

  onRegisterSubmit() {
    const user = {
      google_ID: this.userData.google_ID,
      name: this.userData.name,
      username: this.username,
      email: this.userData.email,
      password: this.password,
    }
    if (!this.validateService.validateGoogle(user)) {
      this.validationError = true;
      this.validationErrorMessage = "Email is not valid";
    } else {
      this.apiService.registerUser(user).subscribe((data: any) => {
        console.log(data.success);
        if (data.success) {
          this.router.navigate(["/login"]);
        } else {
          this.validationError = true;
          this.validationErrorMessage = data.msg;
        }
      });
    }
  }

}
