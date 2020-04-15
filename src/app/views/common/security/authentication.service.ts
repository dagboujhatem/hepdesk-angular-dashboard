import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(this.url + 'login', credentials );
  }

  logout(bodyData) {
    return this.http.post(this.url + 'users/logout', bodyData);
  }
}
