import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

	protocol: string = 'http';
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

	constructor(private http: Http) { }

	getBaseURL() : string {
		return this.protocol + '://localhost:3000/';
	}

	getUsers (page: number, limit: number, q: string){
		let url = this.getBaseURL() + 'api/users?_page=' + page + '&_limit=' + limit + '&q=' + q;
		return this.http.get(url).map(data => data.json());	
	}

	getUser (id: number){
		let url = this.getBaseURL() + 'api/users/' + id;
		return this.http.get(url).map(data => data.json());	
	}

	createUser (user: any){
		console.log('go on');
		let data = new URLSearchParams();
		for (var property in user) {
		    if (user.hasOwnProperty(property)) {
		        if (user[property]){
		        	data.append(property, user[property]);
		        } else if (user[property] === null || user[property] === ''){
		        	data.append(property, '');
		        }
		    }
		}
		let url = this.getBaseURL() + 'api/users';
		return this.http.post(url, data.toString(), {headers: this.headers});
	}

	deleteUser (id: number){
		let url = this.getBaseURL() + 'api/users/' + id;
		return this.http.delete(url).map(data => data.json());	
	}

}
