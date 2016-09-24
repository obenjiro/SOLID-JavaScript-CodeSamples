class Square {
    getWidth() {
        return 100;
    }
    getHeith() {
        return getWidth();
    }
}

class Rectangle extends Square {
    getWidth() {
        return 200;
    }
    getHeith() {
        return 100;
    }
}












function foo(shape) {
    var size = shape.getWidth() * shape.getWidth();
}