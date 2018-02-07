import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	

  constructor(public authService: AuthService,
  				private router: Router) { }


  ngOnInit() {
	}

  signOut() {
    this.authService.logout();
  }

    search() {
    this.router.navigateByUrl('/search');
 }


}








