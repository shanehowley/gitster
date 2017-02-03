import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {

		private username:string;
		private user: any[];
	    private repos: any[];

  constructor(private _githubservice: GithubService) { }

  searchUser() {

		this._githubservice.updateUser(this.username);

		this._githubservice.getUser().subscribe(user => {
			this.user = user
		})

		this._githubservice.getRepos().subscribe(repos => {
			this.repos = repos
		})

	}

  ngOnInit() {
  }

}
