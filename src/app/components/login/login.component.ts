import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patterns } from 'src/app/core/constant/validation-patterns.const';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  defaultLoginForm = {
    email: new FormControl("", [Validators.required, Validators.pattern(Patterns.email)]),
    password: new FormControl("", [Validators.required, Validators.pattern(Patterns.password)]),
  };

  loginForm = new FormGroup(this.defaultLoginForm, []);

  constructor(
    private projectService: ProjectService,
    private router : Router
  ) { }

  ngOnInit(): void {

  }

  login(): void {
    this.loginForm.markAllAsTouched();
    console.log('adasdasdasdasd', this.loginForm.valid)
    if (this.loginForm.valid) {
      this.projectService.loginUser(this.loginForm.value).subscribe((response) => {
        console.log('response', response);
        if (response?.status == true) {
          this.router.navigateByUrl('/home');
        } else {
          // this.notificationService.showError(response?.message);
        }
      }, (error) => {
        // this.notificationService.showError(error?.message || 'Something went wrong!');
      })
    }
  }
}
