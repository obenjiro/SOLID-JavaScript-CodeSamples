import { SomeService } from './someservice';
import { MockHttp } from './http.mock';
import { describe, it, expect } from './mocha';

describe('SomeService - ', function() {
    it('shoul be able to get users', function() {
        var service = new SomeService(
            new MockHttp(['User1']) // error!
        );

        expect(service.getUsers()).to.be(['User1']);
    })
})