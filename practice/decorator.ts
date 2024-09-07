//Decotator functions
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  }
  
  @Logger
  class Person {
    constructor(public name: string) {
      console.log("Creating person object...");
    }
  }
  
  const person = new Person("John");
  //Method decorator
 
  // class Calculator {
    // @Log
  //  add(a: number, b: number) {
  //     return a + b;
  //   }
  // }
  // function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  //   const originalMethod = descriptor.value;
    
  //   descriptor.value = function (...args: any[]) {
  //     console.log(`Calling ${propertyKey} with args: ${args}`);
  //     return originalMethod.apply(this, args);
  //   };
  // }
  // const calculator = new Calculator();
  // console.log(calculator.add(2, 3));
  
  