import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { signupLabels } from 'src/app/app-labels';
import { authCommmonLabels } from 'src/app/app-labels';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  emailid:string = ""
  password:string = ""
  isLoading: boolean = false
  labels = signupLabels
  commonLabels = authCommmonLabels

  constructor(private signupService:SignupService,private router:Router){}

  onSubmit(){
    this.isLoading = true
    this.signupService.signup(this.emailid,this.password).subscribe({
      next : responseData =>{
        if (JSON.stringify(responseData).includes(this.commonLabels.status200Lbl)){
          alert(this.commonLabels.sucessfulSignupLbl)
          this.isLoading = false
          this.router.navigate([""])

        }else{
          if(JSON.stringify(responseData).includes(this.commonLabels.alreadyLbl)){
            alert(this.commonLabels.emailExistsLbl)
          }
          else{
            alert(this.commonLabels.failedSignupLbl)
          }

          console.log(responseData);
          this.isLoading = false
        }
        
      },
      error : error => {
        alert(error)
        console.log(this.commonLabels.errorLbl)
        this.isLoading = false
      }}
      );
  }
}
