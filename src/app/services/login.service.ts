import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/enviorments/enviorment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(email:string ,password:string) {
    const credentials = {
      username: email,
      password: password
    }
    return this.http.post(urls.loginUrl,credentials);
  }
}
