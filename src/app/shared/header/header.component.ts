import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private logoutService:LogoutService,private router: Router ){}

  logout(){
    this.logoutService.invalidateTokens().subscribe({
      next : (respanseData)=>{
        console.log(respanseData)
        this.router.navigate([""])
      },
      error : (error)=>{
        console.log(error)
      }
    });
  }
}
