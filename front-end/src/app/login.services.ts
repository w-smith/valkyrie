import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BlogService {

  baseUrl = 'http://localhost:3000';

  getAllUsers() {
		return this.http.get(`${this.baseUrl}/api/index`);
	}


  constructor( private http: Http ) { }

}