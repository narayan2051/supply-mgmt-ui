import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {LoginGuardService} from "../login-guard.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup | any;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

  }

  login() {
    console.log(this.loginFormGroup.value)
    console.log(this.loginFormGroup.controls['email'].value)
    let data = {
      email: this.loginFormGroup.controls['email'].value,
      password: this.loginFormGroup.controls['password'].value
    }
    this.apiService.login(data).subscribe((res: any) => {
      console.log("Login Result=====>", res);
      let role = res.role.replace('[', '').replace(']', '');
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("role", role);
      this.navigateUser(role);
    })
  }

  private navigateUser(role: any) {
    if (role === "ADMIN") {
      this.router.navigate(['admin/dashboard'])
    } else {
      this.router.navigate(['stocks']);
    }
  }
}
