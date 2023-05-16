import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/enviorments/enviorment';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  generateOtp(email: string){
     const credential = {
      email: email
    }
    return this.http.post(urls.forgetPasswordGenerateOtp,credential)
  }

  resetPassword(email: string,newPassword:string,Otp:string){
    const credential = {
      username: email,
      newPassword: newPassword,
      otp: Otp
    }

    return this.http.post(urls.resetPasswordUrl, credential)
  }
}
