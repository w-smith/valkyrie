import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

map : {};

  constructor() { }

  ngOnInit() { 
    setTimeout(this.initMap(), 1000); 
  }



initMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude
    let long = position.coords.longitude
 
    var uluru = {lat: lat, lng: long};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  )}
}
