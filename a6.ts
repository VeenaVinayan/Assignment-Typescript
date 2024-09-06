// Print Day based on Number (1-7)
function findDay(day:number|string):void{
      switch(day){
        case 1: 
                console.log("SUNDAY !");
                break;
        case 2:
                console.log("MONDAY !");
                break;
        case 3:
              console.log("TUESDAY !!");
              break;
        case 4: 
              console.log("WEDNESDAY !");
              break;
        case 5:
              console.log("THURESDAY !");
              break;
        case 6:
              console.log("FRIDAY !!");
              break;      
        case 7:
              console.log("SATURDAY !!");
              break;      
        default:
             console.log("Invalid Type!!");                 
    }
}
findDay(3);
findDay("4");
