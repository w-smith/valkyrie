import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import * as $ from 'jquery'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { CameraComponent } from './camera/camera.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UsersService } from './services/edit-profile.service';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';

const firebaseConfig = {
    apiKey: "AIzaSyBNSycBUmjHmr76tMGF3oB8gJgcyQy5KDE",
    authDomain: "valkyrie-f6f58.firebaseapp.com",
    databaseURL: "https://valkyrie-f6f58.firebaseio.com",
    projectId: "valkyrie-f6f58",
    storageBucket: "valkyrie-f6f58.appspot.com",
    messagingSenderId: "939030606986"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    ProfileComponent,
    EmailComponent,
    CameraComponent,
    EditProfileComponent,
    NewProfileComponent,
    AboutComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}


