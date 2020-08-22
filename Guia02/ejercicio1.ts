class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    Area():number{
      return this.diagonalHorizontal*this.diagonalVertical;
  
    };
    constructor (diagonalVertical:number, diagonalHorizontal:number){
      this.diagonalVertical=diagonalVertical;
      this.diagonalHorizontal=diagonalHorizontal;
  
    }
  
 }
 let romboejem = new Rombo(2,3);

 console.log('Datos del Rombo' + romboejem.Area);
