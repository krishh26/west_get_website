import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

export enum AuthEndPoint {
  LOGIN_USER = '/web-user/login',
  REGISTER = '/web-user/register',
  PROJECT_LIST = '/project/list'
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

  projectList(payload :any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.REGISTER, payload, { headers: this.getHeader() });
  }
}
