// 2. Create a class Shape with properties width and height and methods getArea(). 
// Create two classes Rectangle and Triangle that inherit from the Shape class
//  and implement the getArea() method for their respective shapes.


class Shape{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    getArea(){

    }
}



class Rectangle extends Shape{

    constructor(length,breadth){
        super(length,breadth)
    }

    getArea(){
        return this.length*this.breadth;
    }
}

class Triangle extends Shape{
        constructor(length,breadth){
        super(length,breadth)
    }

    getArea(){
        let area =  this.length*this.breadth;
        area *= 1/2;
        return area;
    }
}


const rectangle = new Rectangle(10,5);
const areaRectangle = rectangle.getArea();
console.log(`Area of rectangle is ${areaRectangle}`);


const triangle = new Triangle(7,4);
const areaTriangle = triangle.getArea();

console.log(`Area of triangle is ${areaTriangle}`);
