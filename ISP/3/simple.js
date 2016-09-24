class User {
    constructor() {
        this.other = new GodObject();
    }
}
class SimpleUser extends User {
    doSomething() {
        var a = this.other.getA([1, 2]);
        var b = this.other.getB('a', 'c', 'e');

        return this.other.doSomething(a, b, 1, 3);
    }
}
class AdvancedUser extends User {
    doSomething() {
        var c = this.other.getC([1, 2]);
        var e = this.other.getE('a', 'c', 'e');

        return c + e;
    }
}