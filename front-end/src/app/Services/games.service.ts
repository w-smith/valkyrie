import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GamesService {

	baseUrl = 'http://localhost:3000';

	constructor(private http: Http) { }

	getAllGames() {
		return this.http.get(`${this.baseUrl}/api/games`);
	}

	getOneUser(gameId) {
		console.log(gameId);
		return this.http.get(`${this.baseUrl}/api/games/${gameId}`);	
	}

	deleteGame(game) {
		console.log(game.id);
		return this.http.delete(`${this.baseUrl}/api/games/${game.id}`);
	}

	saveGame(newGame) {
		console.log(newGame);
		return this.http.post(`${this.baseUrl}/api/games/`, newGame);
	}

	updateGame(updatedGame) {
		return this.http.put(`${this.baseUrl}/api/games/${updatedGame.id}`, updatedGame);		
	}

}