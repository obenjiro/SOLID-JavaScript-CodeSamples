import { Http } from 'http';

export class SomeService {
    constructor() {
        this.http = new Http();
    }
    getUsers() {
        return this.http.get('users').then(function(resp){
            return resp.json();
        });
    }
}