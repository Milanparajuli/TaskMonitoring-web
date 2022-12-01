import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { NavComponent } from './common/nav/nav.component';
// import { FooterComponent } from './common/footer/footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TaskDetailComponent } from './TaskDetail/task-detail/task-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './TaskDetail/add-task/add-task.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthNavComponent } from './auth/auth-nav/auth-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    // NavComponent,
    // FooterComponent,
    WelcomePageComponent,
    TaskDetailComponent,
    AddTaskComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
