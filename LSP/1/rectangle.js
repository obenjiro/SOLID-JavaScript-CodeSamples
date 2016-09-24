class Rectangle {
    setWidth(w) {
        this.w = w;
    }
    setHeight(h) {
        this.h = h;
    }
    getArea() {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    setSize(size) {
        this.size = size;
    }
    getArea() {
        return this.size * this.size;
    }
}
