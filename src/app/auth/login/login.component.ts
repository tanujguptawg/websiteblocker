import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {loginLabels} from "src/app/app-labels";
import { authCommmonLabels } from 'src/app/app-labels';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailid:string = ""
  password:string = ""
  isLoading: boolean = false
  labels = loginLabels
  commonLabels = authCommmonLabels
  
  constructor(private loginService:LoginService,private router:Router){}

  onSubmit(){
    this.isLoading = true
    this.loginService.login(this.emailid,this.password).subscribe({
      next : responseData =>{
        if (JSON.stringify(responseData).includes(authCommmonLabels.status200Lbl)){
          this.isLoading = false
          console.log(responseData)
          this.router.navigate(["/home"])
        }else{
          console.log(responseData)
          alert(this.commonLabels.invalidUsernamePasswordLbl);
          this.isLoading = false
        }
        
      },
      error : (error) => {
        alert(error)
        console.log(authCommmonLabels.errorLbl)
        this.isLoading = false
      }
    });
  }
}
