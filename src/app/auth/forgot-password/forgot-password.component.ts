import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { forgetPasswordLabels } from 'src/app/app-labels';
import { authCommmonLabels } from 'src/app/app-labels';

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
  labels = forgetPasswordLabels

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
        if (JSON.stringify(responseData).includes(authCommmonLabels.status200Lbl)){
          console.log(responseData)
          alert(forgetPasswordLabels.passsowordchangedLbl)
          this.router.navigate([""])
        }else{
          console.log(responseData)
          alert(this.labels.invalidOtpLbl);
        }
      },
      error : (error) => {
        console.log(this.labels.errorChangingPasswordLbl);
        //console.log(error);
      }
    })
    this.isLoading = false
  }
}
