export class SomeService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('users').then(function(resp){
            return resp.json();
        });
    }
}