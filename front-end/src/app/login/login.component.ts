import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {  } from '../login.services';
import { Router } from '@angular/router';
=======
import { AuthService } from '../auth.service';
>>>>>>> 495ae818a8a9d09a276a9e97842433be4dbfd886

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}


  }
