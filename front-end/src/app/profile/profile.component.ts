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

  	edit() {
	this.router.navigateByUrl('/edit-profile');}

  ngOnInit() {
	}

  signOut() {
    this.authService.logout();
  }

}








