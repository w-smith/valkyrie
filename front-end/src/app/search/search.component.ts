import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {




constructor() { 



}
ngOnInit() { }

api() {
	// console.log($('#input').val())
	var input = $('#input').val()
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','http://localhost:1337/valkyrieapp.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=262fc1b64e4ded514bb8daa29c8179c43c774673&format=json&query='+input+'&resources=game'); 
		ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData);
		for (var i = 0; i < ourData.results.length; i++) { 
			var name = ourData.results[i].name; //game title variable
			var year = ourData.results[i].original_release_date; //release year variable (weird format)
			var img = ourData.results[i].image.small_url; // game image url
			//below generates the title/year div
			var newGameDiv = document.createElement('div'); // makes a div
			newGameDiv.setAttribute("id", "gameDiv");   // sets the id as gameDiv
			//below puts the title and year into the div, as well as fixes the weird formatting for the year
			newGameDiv.innerHTML += name + ' (' + year.substring(0, 4) + ')'; 
			//below generates the image div
			var newImg = document.createElement('img'); // makes a new image
			newImg.setAttribute("src", img);   // sets the source as the variable above
			//below appends those fancy new divs onto the body
			document.body.appendChild(newImg);
			document.body.appendChild(newGameDiv);
			//image style
			newImg.style.display = 'block'
			newImg.style.width = '50%'
			newImg.style.margin = '0 auto'
			newImg.style.border = '3px solid white'
			//game div style
			newGameDiv.style.width = '90%'
			newGameDiv.style.marginLeft = '5%'
			newGameDiv.style.paddingBottom = '12%'
			newGameDiv.style.display = 'block'
			newGameDiv.style.fontSize = '200%'
			newGameDiv.style.textAlign = 'center'
			newGameDiv.style.textTransform = 'uppercase'
			newGameDiv.style.color = 'white'
		}
    		
   		};
			ourRequest.send(); //don't remember what this does, but it's important
};





}






			// below runs another loop thorough the platforms array
			// for (var q = 0; q < ourData.results[i].platforms.length; q++) {
			// 		var platformDiv = document.createElement('div'); 	// makes a unique div
			// 		platformDiv.setAttribute("id", "platformDiv");   // sets the id as platformDiv
			// 		platformDiv.onclick = function() { // adds an event listener
			// 			this.setAttribute("id", "addedDiv"); //onclick changes the id to 'addedDiv'
			// 		}; 
			// 		var platform = ourData.results[i].platforms[q].name; 
			// 		platformDiv.innerHTML += platform; //adds the platform name into a new div
			// 		document.body.appendChild(platformDiv); //places it on the page
					//this repeats for as many platforms as necessary


