import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/enviorments/enviorment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }
  tokens = {
    accessToken : localStorage.getItem("accessToken")
  }
  invalidateTokens(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("refreshToken");
    return this.http.post(urls.logoutUrl,this.tokens)
  }
}
