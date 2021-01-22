import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { UserlistComponent } from './adminhomepage/userlist/userlist.component';
import { BooklistComponent } from './adminhomepage/booklist/booklist.component';
import { UpdatebookComponent } from './homepage/updatebook/updatebook.component';
import { CreativityComponent } from './homepage/creativity/creativity.component';
import { CreativitygalleryComponent } from './homepage/creativitygallery/creativitygallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploadbookComponent } from './homepage/uploadbook/uploadbook.component';
import { DonationComponent } from './homepage/donation/donation.component';
import { ThankyouComponent } from './homepage/thankyou/thankyou.component';
import { InnerheaderComponent } from './homepage/innerheader/innerheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './homepage/search/search.component';
import { MyprofileComponent } from './homepage/myprofile/myprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './homepage/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomepageComponent,
    IndexpageComponent,
    AdminloginComponent,
    AdminhomepageComponent,
    UserlistComponent,
    BooklistComponent,
    UpdatebookComponent,
    CreativityComponent,
    CreativitygalleryComponent,
    HeaderComponent,
    FooterComponent,
    UploadbookComponent,
    DonationComponent,
    ThankyouComponent,
    InnerheaderComponent,
    SearchComponent,
    MyprofileComponent,
    ForgotpasswordComponent,
    LogoutComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
