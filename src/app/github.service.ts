import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

	private userName:string;
	private Client_id:string = 'b3559c219d2f8a9aa131';
	private Client_secret:string = '7817503ecad6a5665ed5226fc932b329bf3eb79f';

	constructor(private _http:Http) {

		console.log('GitHub API service ready');

		this.userName = "shanehowley"
	}

	updateUser(username:string)
	{
		this.userName=username;
	}

getRepos(){

		return   this . _http . get ( 'http://api.github.com/users/'
			+ this.userName
			+'/repos?client_id=' + this.Client_id
			+'&client_secret=' + this.Client_secret
			).map(res => res.json());
	}


	getUser(){

		return this._http.get('http://api.github.com/users/'

			+ this.userName
			+'?client_id=' + this.Client_id
			+'&client_secret=' + this.Client_secret
			).map(res => res.json());
	}



}
