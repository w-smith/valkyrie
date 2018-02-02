import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit() {
    document.getElementById("psnpencil").addEventListener("click", function(){
      var x =  document.getElementById("psnplaceholder");
      x.setAttribute("contenteditable", "true");
      x.focus();
     });

    document.getElementById("xboxpencil").addEventListener("click", function(){
      var x =  document.getElementById("xboxplaceholder");
      x.setAttribute("contenteditable", "true");
      x.focus();
     });

    document.getElementById("bnetpencil").addEventListener("click", function(){
      var x =  document.getElementById("bnetplaceholder");
      x.setAttribute("contenteditable", "true");
      x.focus();
     });

    document.getElementById("steampencil").addEventListener("click", function(){
      var x =  document.getElementById("steamplaceholder");
      x.setAttribute("contenteditable", "true");
      x.focus();
     });

    document.getElementById("riotpencil").addEventListener("click", function(){
      var x =  document.getElementById("riotplaceholder");
      x.setAttribute("contenteditable", "true");
      x.focus();
     });


  }

  signOut() {
    this.authService.logout();
  }

}








