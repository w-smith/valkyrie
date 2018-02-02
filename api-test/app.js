btn.addEventListener('click', function() {
	
	var x = document.getElementById('input');
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET',
		'https://www.giantbomb.com/api/search/?api_key=262fc1b64e4ded514bb8daa29c8179c43c774673&format=json&query='+input.value+'&resources=game'); 
		ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		for (i = 0; i < ourData.results.length; i++) { 
			var name = ourData.results[i].name; //game title variable
			var year = ourData.results[i].original_release_date; //release year variable (weird format)
			var img = ourData.results[i].image.small_url; // game image url
			//below generates the title/year div
			newGameDiv = document.createElement('div'); // makes a div
			newGameDiv.setAttribute("id", "gameDiv");   // sets the id as gameDiv
			//below puts the title and year into the div, as well as fixes the weird formatting for the year
			newGameDiv.innerHTML += name + ' (' + year.substring(0, 4) + ')'; 
			//below generates the image div
			newImg = document.createElement('img'); // makes a new image
			newImg.setAttribute("src", img);   // sets the source as the variable above
			
			//below appends those fancy new divs onto the body
			document.body.appendChild(newImg);
			document.body.appendChild(newGameDiv);
			// below runs another loop thorough the platforms array
			for (q = 0; q < ourData.results[i].platforms.length; q++) {
					platformDiv = document.createElement('div'); 	// makes a unique div
					platformDiv.setAttribute("id", "platformDiv");   // sets the id as platformDiv
					platformDiv.onclick = function() { // adds an event listener
						this.setAttribute("id", "addedDiv"); //onclick changes the id to 'addedDiv'
					}; 
					var platform = ourData.results[i].platforms[q].name; 
					platformDiv.innerHTML += platform; //adds the platform name into a new div
					document.body.appendChild(platformDiv); //places it on the page
					//this repeats for as many platforms as necessary
    			}
    		}
   		};
			ourRequest.send(); //don't remember what this does, but it's important
});







	

















// btn.addEventListener('click', function() {
// 	var x = document.getElementById('input');
// 	var ourRequest = new XMLHttpRequest();
// 	ourRequest.open('GET', 'https://www.giantbomb.com/api/search/?api_key=262fc1b64e4ded514bb8daa29c8179c43c774673&format=json&query=' +  input.value  + '&resources=game'); 
// 	ourRequest.onload = function() {
// 		var ourData = JSON.parse(ourRequest.responseText);
// 		for (i = 0; i < ourData.results.length; i++) { 
// 			var name = ourData.results[i].name;
// 			var year = ourData.results[i].original_release_date;
// 			console.log(name + ' (' + year.substring(0, 4) + ')');
//     		for (q = 0; q < ourData.results[i].platforms.length; q++) {
//     			console.log('    - ' + ourData.results[i].platforms[q].name);

//     		}
//     	}
//    };
// 	ourRequest.send();
// });




	