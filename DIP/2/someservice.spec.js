import { SomeService } from './http';
import { MockHttp } from './http.mock.js';

describe('SomeService - ', function() {
    it('shoul be able to get users', function() {
        var service = new SomeService(
            new MockHttp(['User1'])
        );

        expect(service.getUsers()).to.be(['User1']);
    })
})