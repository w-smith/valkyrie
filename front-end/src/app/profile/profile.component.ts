import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

<<<<<<< HEAD


  constructor() { }

  ngOnInit() {
	
	document.getElementById("psnpencil").addEventListener("click", function(){
    	document.getElementById("psnplaceholder").setAttribute("contenteditable", "true");
    });


  }






=======
  constructor(public authService: AuthService) { }

  ngOnInit() {}

  signOut() {
    this.authService.logout();
  }
>>>>>>> fe0245be961e26d7b559ae3037ee9dd5eb0be55c
}








