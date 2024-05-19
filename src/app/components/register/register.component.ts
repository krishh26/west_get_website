import { ProjectService } from 'src/app/services/project.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  activeStep: number = 1;

  step1 = {
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),
  };

  step2 = {
    companyName: new FormControl("", [Validators.required]),
    industry: new FormControl("", [Validators.required]),
    numberOfBranch: new FormControl("", [Validators.required]),
    registerNumber: new FormControl("", [Validators.required]),
    mainOfficeAddress: new FormControl("", [Validators.required]),
    website: new FormControl("", [Validators.required]),
    companyContactNumber: new FormControl("", [Validators.required]),
    numberOfEmployees: new FormControl("", [Validators.required]),
    sector: new FormControl("", [Validators.required]),
  };

  step1Form = new FormGroup(this.step1, []);
  step2Form = new FormGroup(this.step2, []);

  constructor(
    private projectService: ProjectService
  ) {

  }

  nextStep(step: number) {
    switch (step) {
      case 1:
        this.step1Form.markAllAsTouched();
        if (this.step1Form.valid) {
          this.activeStep = 2;
        }
        break;
      case 2:
        this.step2Form.markAllAsTouched();
        if (this.step2Form.valid) {
          this.activeStep = 3;
        }
        break;
      case 3:
        this.activeStep = 4;
        break;
      case 4:
        this.activeStep = 5;
        break;
      case 5:
        // this.activeStep = 6;
        this.submitForm();
        break;
    }
  }

  submitForm() {
    const payload = {
      ...this.step1Form.value,
      ...this.step2Form.value
    }
    this.projectService.register(payload).subscribe((response) => {
      if (response?.status) {
        this.activeStep = 6;
      } else {

      }
    }, (error) => {

    })
  }
}
