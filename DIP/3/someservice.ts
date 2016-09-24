import { Http } from './http'

export class SomeService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('users').then(function(resp){
            return resp.json();
        });
    }
}