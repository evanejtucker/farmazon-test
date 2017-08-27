import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ServerService } from './server.service';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: 'sign-in', 
    component: SignInComponent, 
  },
  { 
    path: 'sign-up', 
    component: SignUpComponent, 
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    SearchFormComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
