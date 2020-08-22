class Calculadora{
    numero1 : number
    numero2 : number

    constructor( numero1:number, numero2:number ){
        this.numero1 = numero1
        this.numero2 = numero2
      }

      operaciones(){
        var sum:number;
        var res:number;
        var mul:number;
        var div:number;

        sum = this.numero1 + this.numero2;
        res = this.numero1 - this.numero2;
        mul = this.numero1 * this.numero2;
        div = Math.round((this.numero1 / this.numero2)*100)/100;

        console.log("\nOPERACIONES BASICAS\n"+
                    this.numero1+" + "+this.numero2+" = "+sum+"\n"+
                    this.numero1+" - "+this.numero2+" = "+res+"\n"+
                    this.numero1+" X "+this.numero2+" = "+mul+"\n"+
                    this.numero1+" / "+this.numero2+" = "+div+"\n"
        )
    }
}

let calcu1 = new Calculadora(4,8);
calcu1.operaciones();