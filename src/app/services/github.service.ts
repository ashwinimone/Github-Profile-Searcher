import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;
    private client_id = '15c851c6ec738ed4542a';
    private client_secret = 'bcbafcdf83819f4aa759b6248e4fb70ad79ca694';

    constructor(private _http: Http){
        console.log('Service ready');
        this.username = 'ashwinimone';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }

}


