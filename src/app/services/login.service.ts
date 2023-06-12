import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/enviorments/enviorment';
import { user } from 'src/enviorments/enviorment';

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
    return this.http.post<any>(urls.loginUrl,credentials);
  }

  setTokens(accessToken:any,idToken:any,refreshToken:any,expiresIn:any) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem("idToken",idToken)
    localStorage.setItem("expiresIn",expiresIn)
    localStorage.setItem("refreshToken",refreshToken)
    user.IsLoggedIn = true

  }

}
