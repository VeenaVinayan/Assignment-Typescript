//class getter and setter

class Rectangle{
    private _width :number;
    private _height:number;
    public _area : number;
    constructor(width :number,height:number){
        this._width=width;
        this._height=height;
        this._area=0;
    }
    set width(value:number){
        this._width=value;
    }
    set height(newValue){
        this._height=newValue;   
    }
    get width():number{
        return this._width;
    }
    get height():number{
         return this._height;
    }
    get area(): number{
        return this._height*this._width;
    }
}
const  rect =new Rectangle(10,5);
console.log("Height ::"+rect.height);
console.log("Width ::"+rect.width);
rect.width=20;
rect.height=25;
console.log("Height ::"+rect.height);
console.log("Width ::"+rect.width);
console.log(rect.area);
