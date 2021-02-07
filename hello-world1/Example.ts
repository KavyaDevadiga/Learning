export class example{
    constructor(private s?:number){//question mark indicates parameter is optional and private helps to assign value to s without defining it
    }
    print=()=>console.log("value of s is "+this.s);
    get S(){
          return this.s;  
    }
    set S(value){
        this.s=value;
    }
}