import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  emailid:string = ""
  newPassword:string = ""
  isLoading: boolean = false
  isOTPBtnClicked: boolean = false
  OTP:string = ""

  constructor(private router:Router,private forgotPasswordService:ForgotPasswordService){}

  getOTP(){
    this.isOTPBtnClicked = !this.isOTPBtnClicked
    this.forgotPasswordService.generateOtp(this.emailid).subscribe({
      next : (responseData)=>{
        console.log(responseData)
      },
      error : (error)=>{
        console.log(error)
      }
    }
  )
}

  resetPassword(){
    this.isLoading = true
    this.forgotPasswordService.resetPassword(this.emailid,this.newPassword,this.OTP).subscribe({
      next : (responseData)=>{
        console.log("password changes successfully");
        if (JSON.stringify(responseData).includes("200")){
          console.log(responseData)
          this.router.navigate([""])
        }else{
          console.log(responseData)
          alert("invalid otp");
        }
      },
      error : (error) => {
        console.log("error in changing passwords");
        //console.log(error);
      }
    })
    this.isLoading = false
  }
}
