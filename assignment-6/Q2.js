// Create a class Shape with properties width and height and methods getArea().
//  Create two classes Rectangle and Triangle that inherit from the Shape class and 
// implement the getArea() method for their respective shapes.



class Shape{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    getArea(){
    }
}

    class Rectangle extends Shape{
        super(length,breadth){
            this.length = length;
            this.breadth = breadth;
        }

        getArea(){
            return this.length*this.breadth;
        }
    }

        class Triangle extends Shape{
        super(length,breadth){
            this.length = length;
            this.breadth = breadth;
        }

        getArea(){
            let result =  this.length*this.breadth;
            return result/2;
        }
    }

const rectangle = new Rectangle(10,20);
console.log(rectangle.getArea())

const triangle = new Triangle(10,2);
console.log(triangle.getArea())

