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
import { FeedbacklistComponent } from './adminhomepage/feedbacklist/feedbacklist.component';
import { UpdatebookComponent } from './homepage/updatebook/updatebook.component';

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
    FeedbacklistComponent,
    UpdatebookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
