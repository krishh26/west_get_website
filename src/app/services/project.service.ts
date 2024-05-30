import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

export enum AuthEndPoint {
  LOGIN_USER = '/web-user/login',
  REGISTER = '/web-user/register',
  LATEST_PROJECT_LIST = '/project/list/latest',
  CATEGORY_LIST = '/category/list',
  INDUSTRY_LIST = '/industry/list'
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  loginUser(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.LOGIN_USER, payload, { headers: this.getHeader() });
  }

  register(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.REGISTER, payload, { headers: this.getHeader() });
  }

  projectList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.LATEST_PROJECT_LIST, { headers: this.getHeader() });
  }

  getCategoryList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.CATEGORY_LIST, { headers: this.getHeader() });
  }

  getIndustryList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.INDUSTRY_LIST, { headers: this.getHeader() });
  }
}
