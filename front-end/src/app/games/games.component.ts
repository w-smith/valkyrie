import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../services/games.service';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  newGame = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private gamesService : GamesService
  ) { }

  ngOnInit() {

  }

  saveGame(newGame) {
    console.log("saving Game");
    console.log(newGame);
    this.gamesService.saveGame(newGame)
        .subscribe(response => {
      console.log(response.json());
      let game = response.json();
      console.log('It is working');
      this.router.navigate([game.id + "/profile/"]);
    })
  }

}
