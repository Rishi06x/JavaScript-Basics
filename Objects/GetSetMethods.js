class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        this._width = newWidth; //private property
        if (newWidth > 0) {
            return newWidth;
        } else {
            console.log("Enter +ve value");
        }
    }

    set height(newHeight) {
        this._height = newHeight; // private property
        if (newHeight > 0) {
            return newHeight;
        } else {
            console.log("Enter +ve value");
        }
    }


    get width() {
        return `Width: ${this._width}`;
    }

    get height() {
        return `Height: ${this._height}`;
    }

    get area() {
        return `Area: ${this._width * this._height}`;
    }
}

const rectangle = new Rectangle(2, 5);
rectangle.height = 10; //Can modify the value

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
