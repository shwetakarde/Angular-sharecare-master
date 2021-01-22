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
import { MyprofileComponent } from './homepage/myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CartComponent } from './homepage/cart/cart.component';
import { AddressComponent } from './homepage/address/address.component';
import { FinalComponent } from './homepage/final/final.component';
import { BooklistComponent } from './adminhomepage/booklist/booklist.component';
import { CreativitylistComponent } from './adminhomepage/creativitylist/creativitylist.component';
import { DonationlistComponent } from './adminhomepage/donationlist/donationlist.component';


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
      { path: 'userlist', component: UserlistComponent },
      { path: 'booklist', component: BooklistComponent },
      { path: 'creativitylist', component: CreativitylistComponent },
      { path: 'donationlist', component: DonationlistComponent },

    ]
  },
  // {
  //   path: 'adminhomepage', component: AdminhomepageComponent,
  //   children: [
  //     { path: 'booklist', component: BooklistComponent }
  //   ]
  // },

  { path: 'creativitygallery', component: CreativitygalleryComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'uploadbook', component: UploadbookComponent },
  { path: 'search', component: SearchComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'cart/:bookId', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'final', component: FinalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
