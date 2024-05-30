import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent {

  showLoader: boolean = false;
  categoryList: any = [];
  industryList: any = [];
  totalRecords: number = 0;

  constructor(
    private projectService: ProjectService,
    private notificationService: NotificationService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.getcategoryList();
    this.getindustryList();
  }

  getcategoryList() {
    this.showLoader = true;
    this.projectService.getCategoryList().subscribe((response) => {
      this.categoryList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.categoryList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  getindustryList() {
    this.showLoader = true;
    this.projectService.getIndustryList().subscribe((response) => {
      this.industryList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.industryList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

}
