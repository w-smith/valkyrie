import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/edit-profile.service';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  newUser = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private usersService : UsersService
  ) { }

  ngOnInit() {

  }

  saveUser(newUser) {
    console.log("saving user");
    console.log(newUser);
    this.usersService.saveUser(newUser)
        .subscribe(response => {
      console.log(response.json());
      let user = response.json();
      console.log('It is working');
      this.router.navigate([user.id + "/profile/"]);
    })
  }

}
