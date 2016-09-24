import { IHttp } from './http'

export class SomeService {
    http: IHttp;
    constructor(http: IHttp) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('users').then(function(resp){
            return resp.json();
        });
    }
}