import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { UserlistComponent } from './adminhomepage/userlist/userlist.component';
import { CreativityComponent } from './homepage/creativity/creativity.component';
import { CreativitygalleryComponent } from './homepage/creativitygallery/creativitygallery.component';
import { DonationComponent } from './homepage/donation/donation.component';
import { ThankyouComponent } from './homepage/thankyou/thankyou.component';
import { UploadbookComponent } from './homepage/uploadbook/uploadbook.component';
import { UpdatebookComponent } from './homepage/updatebook/updatebook.component';
import { SearchComponent } from './homepage/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/indexpage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'creativity', component: CreativityComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'indexpage', component: IndexpageComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  {
    path: 'adminhomepage', component: AdminhomepageComponent,
    children: [
      { path: 'userlist', component: UserlistComponent }
    ]
  },

  { path: 'creativitygallery', component: CreativitygalleryComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'uploadbook', component: UploadbookComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
