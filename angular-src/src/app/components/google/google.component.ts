import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  data: any;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.data = JSON.parse(map.get("token"));
      console.log(this.data);
      if (!this.data.associate) {
        if (this.data.token != null) {
          this.apiService.retrieveUser(this.data.token).subscribe((res: any) => {
            if (!res.success) {
              console.log("Couldn't retrieve user, token error");
              this.router.navigate(["/login"]);
            } else {
              this.apiService.storeToken(this.data.token, JSON.parse(res.user));
              this.router.navigate(["/dashboard"]);
            }
          })
        }
      } else {
        this.email = this.data.email;
      }
    })
  }

}
