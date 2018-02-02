import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor() { }

  ngOnInit() {
	
	document.getElementById("psnpencil").addEventListener("click", function(){
    	document.getElementById("psnplaceholder").setAttribute("contenteditable", "true");
    });


  }






}








