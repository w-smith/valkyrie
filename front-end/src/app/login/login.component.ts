import { Component, OnInit } from '@angular/core';
import {  } from '../login.services';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email : string = ""
password : string = ""



  constructor(private authService: AuthService) { }

login() {
	console.log("button clicked");
	this.authService.login(this.email, this.password) 
	
}

register() {
	console.log("Signup button clicked");
	this.authService.emailSignup(this.email, this.password) 
	
}

  ngOnInit() {}



}