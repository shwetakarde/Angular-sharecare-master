import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/indexpage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'indexpage', component: IndexpageComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminhomepage', component: AdminhomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
