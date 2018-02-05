import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './edit-profile.service';
import { ActivatedRoute, Router }   from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class UserEditComponent implements OnInit {

	updatedUser = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private usersService : UsersService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.usersService.getOneUser(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedUser = response.json();
      });
    });
  }

  updateUser(updatedUser) {
    console.log("User Updated!");

    
    this.usersService.updateUser(updatedUser)
    .subscribe(response => {
      console.log(response.json());
      let user = response.json();
      this.router.navigate(["/users/" + user.id]);
    });  
  }

}

