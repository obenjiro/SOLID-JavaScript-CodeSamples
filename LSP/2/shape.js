class Geometry {
    getArea() {
        throw new Error('Not implemented');
    }
}
class SquareGeometry extends Geometry {
    constructor() {
        this.size = 0;
    }
    getArea() {
        return this.size * this.size;
    }
}
class RectangleGeometry extends Geometry  {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square {
    constructor() {
        this.geometry = new SquareGeometry();
    }
}
class Rectangle {
    constructor() {
        this.geometry = new RectangleGeometry();
    }
}

var s = new Square();
s.geometry.size = 10;
console.log(s.geometry.getArea());

var r = new Rectangle();
r.geometry.width = 100;
r.geometry.height = 20;
console.log(s.geometry.getArea())