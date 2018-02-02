import { Component, OnInit } from '@angular/core';
// import { formdiv } from './signup.component.html';
// import {  } from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {


// var config = {
//     apiKey: "AIzaSyBNSycBUmjHmr76tMGF3oB8gJgcyQy5KDE",
//     authDomain: "valkyrie-f6f58.firebaseapp.com",
//     databaseURL: "https://valkyrie-f6f58.firebaseio.com",
//     projectId: "valkyrie-f6f58",
//     storageBucket: "valkyrie-f6f58.appspot.com",
//     messagingSenderId: "939030606986"
//   };
//   firebase.initializeApp(config);

// var userRef = firebase.database().ref('user');

// // listen for form submission
// document.getElementById('formdiv').addEventListener('Submit', submitForm);

// // submit form
// function submitForm(event){
// 	event.preventDefault();
// 	console.log("submit test");

// // get values
// var email = getInputVal('email');
// var password = getInputVal('password');
// var repeatpassword = getInputVal('repeatpassword');

// // function to get form values

// function getInputVal(id){
// 	return (<HTMLInputElement>document.getElementById(id)).value;
// }


// function saveUser(email, password, repeatpassword){
// 	var newUserRef = userRef.push();
// 	newUserRef.set ({
// 		email : email,
// 		password : password,
// 		reapeatpassword : repeatpassword
// 	})
// }



// 		}


	}
}
