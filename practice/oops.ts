//Implementation of oops
class Vehicle{
     make:string;
     model:string;
     year:number;
     constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
     }
     start():void{
       console.log(`${this.make} ${this.model} ${this.year} is starting... `);
     }
     stop():void{
       console.log(`${this.make} ${this.model} is stopping....`)
     }
}   
// Inheritance
class Cars extends Vehicle{ 
   door:number;
   type:string;
   constructor(make:string,model:string,year:number,door:number,type:string){
      super(make,model,year); //call parent constructor
      this.door=door;
      this.type=type;
   }
   openTrunk():void{
       console.log(`${this.make} ${this.model} 's trunk is open !!`);
   }
   start():void{
      console.log(`${this.model} has ${this.door}  doors and starting....`)
   }
}
class Bikes extends Vehicle{
   hasHelmet:boolean;
   constructor(make:string,model:string,year:number,hasHelmet:boolean){
       super(make,model,year);
       this.hasHelmet=hasHelmet;
   }
   checkHelmet():void{
       console.log(this.hasHelmet?"Has Helmet " : "No Helmet !");
   }
   start():void{
      console.log(`${this.make} ${this.model} (Bike) is starting...`);
      this.checkHelmet();
   }
}
const myCar = new Cars('VV','Taigun',2023,4,"SUV");
const myBike =new Bikes('Honda','DIo',2014,true);
myCar.start();
myBike.start();
myCar.openTrunk();
myBike.checkHelmet();
