import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { User } from '../classes/User';


/*
 *	Este componente incluye la busqueda de usuarios
 */
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

	private users: Array<User> = [];
	private page: number = 0;
	private waiting: boolean = false;
	private activeSearch: string = '';

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.performSearch('');
	}

	performSearch(search: string){
		if (!search && search !== ''){
			search = this.activeSearch;
		} else {
			this.activeSearch = search;
		}
		this.apiService.getUsers(this.page+1,10,search).subscribe(users => {
			this.users = [];
			users.forEach(rawUser => {
				this.users.push(new User(rawUser));
			});
		});	
	}

	restartSearch(){
		this.page = 0;
		this.performSearch(null);
	}

	searchChange(event:any) {
		this.page = 0;
		this.performSearch(event.target.value);
	}

	nextPage(){
		this.page++;
		this.performSearch(null);
	}

	prevPage(){
		this.page--;
		this.performSearch(null);
	}

	deleteUser(user: User){
		this.waiting = true;
		this.apiService.deleteUser(user.id).subscribe(data => {
			this.waiting = false;
			this.performSearch(null);
		}, error => {
			this.waiting = false;
		});
	}

}
