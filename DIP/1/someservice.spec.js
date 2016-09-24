import { SomeService } from './someservice';

describe('SomeService - ', function() {
    it('shoul be able to get users', function() {
        var service = new SomeService();

        expect(service.getUsers()).to.be(['User1']);
    })
})