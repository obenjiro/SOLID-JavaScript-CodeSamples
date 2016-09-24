class User {
    constructor() {
        this.other = new GodObject();
    }
    doSomething() {
        var result = [];

        var a = this.other.getA([1, 2]);
        var b = this.other.getB('a', 'c', 'e');

        result.push(this.other.doSomething(a, b, 1, 3));

        var c = this.other.getC([1, 2]);
        var e = this.other.getE('a', 'c', 'e');

        result.push(c + e);

        return result;
    }
}