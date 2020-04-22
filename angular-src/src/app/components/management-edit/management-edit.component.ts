import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-management-edit',
  templateUrl: './management-edit.component.html',
  styleUrls: ['./management-edit.component.scss']
})
export class ManagementEditComponent implements OnInit {
  active = 1;
  name: string;
  username: string;
  edited_username: string;
  email: string;
  role: string;
  validationError: boolean = false;
  validationSuccess: boolean = false;
  validationErrorMessage: string = "";
  validationSuccessMessage: string = "";

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.username = map.get("username");
      this.edited_username = this.username;
      this.apiService.getProfile(this.username).subscribe((data: any) => {
        this.name = data.user.name;
        console.log(data.user);
        this.email = data.user.email;
        this.role = data.user.role;
      })
    });
  }

  onChangeName() {
    this.apiService.changeUserData(this.username, { name: this.name }).subscribe((data: any) => {
      if (data.success) {
        this.validationSuccess = true;
        this.validationError = false;
        this.validationSuccessMessage = data.msg;
      } else {
        this.validationSuccess = false;
        this.validationError = true;
        this.validationErrorMessage = data.msg;
      }
    })

  }

  onChangeUsername() {
    var edited_username = this.edited_username;
    this.apiService.changeUserData(this.username, { username: this.edited_username }).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(["/management_edit/" + edited_username]);
        this.validationSuccess = true;
        this.validationError = false;
        this.validationSuccessMessage = data.msg;
      } else {
        this.validationSuccess = false;
        this.validationError = true;
        this.validationErrorMessage = data.msg;
      }
    })
  }

  onChangeEmail() {
    this.apiService.changeUserData(this.username, { email: this.email }).subscribe((data: any) => {
      if (data.success) {
        this.validationSuccess = true;
        this.validationError = false;
        this.validationSuccessMessage = data.msg;
      } else {
        this.validationSuccess = false;
        this.validationError = true;
        this.validationErrorMessage = data.msg;
      }
    })
  }

  onChangePermissions() {
    this.apiService.changeUserData(this.username, { role: this.role }).subscribe((data: any) => {
      if (data.success) {
        this.validationSuccess = true;
        this.validationError = false;
        this.validationSuccessMessage = data.msg;
      } else {
        this.validationSuccess = false;
        this.validationError = true;
        this.validationErrorMessage = data.msg;
      }
    })
  }
}
