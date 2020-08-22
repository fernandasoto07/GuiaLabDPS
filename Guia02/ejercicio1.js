class Rombo {
    diagonalVertical: Number;
    diagonalHorizontal: Number;
    constructor(DHorizontal:Number,DVertical:Number){
        this.diagonalHorizontal = "DHorizontal";
        this.diagonalVertical = "DVertical";
    }

    getArea(): Number  {
        return (this.diagonalHorizontal * this.diagonalVertical)
    }

}