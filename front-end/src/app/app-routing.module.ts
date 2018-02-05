import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
<<<<<<< HEAD
import { EditProfileComponent } from './edit-profile/edit-profile.component';
=======
import * as firebase from 'firebase/app';
>>>>>>> ec3ba877481c3ed44869837a499c086477d88a43

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
<<<<<<< HEAD
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent}
=======
  { path: ':id/profile', component: ProfileComponent },

>>>>>>> ec3ba877481c3ed44869837a499c086477d88a43
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

