import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth-guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path : "Signup",component : SignupComponent},
  { path : "dashboard",component : DashboardComponent,children : [{ path : "home",component : HomeComponent}],canActivate : [AuthGuard] },
  { path : "home",component : HomeComponent},
  { path : "forgotPassword", component : ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
