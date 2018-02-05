import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

	baseUrl = 'http://localhost:3000';

	getAllUsers() {
		return this.http.get(`${this.baseUrl}/api/users`);
	}

	getOneUser(userId) {
		console.log(userId);
		return this.http.get(`${this.baseUrl}/api/users/${userId}`);	
	}

	deleteUser(user) {
		console.log(user.id);
		return this.http.delete(`${this.baseUrl}/api/users/${user.id}`);
	}

	saveUser(newUser) {
		console.log(newUser);
		return this.http.post(`${this.baseUrl}/api/users/`, newUser);
	}

	updateUser(updatedUser) {
		return this.http.put(`${this.baseUrl}/api/users/${updatedUser.id}`, updatedUser);		
	}

  constructor(private http: Http) { }

}