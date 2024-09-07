class Engine {
    start() {
      console.log("Engine started");
    }
  }
  
  class ElectricEngine extends Engine {
    start() {
      console.log("Electric engine started");
    }
  }
  
  class Car {
    private engine: Engine;
  
    constructor(engine: Engine) { // Dependency is injected
      this.engine = engine;
    }
  
    start() {
      this.engine.start();
    }
  }
  
  // Dependencies are injected externally
  const engine = new Engine();
  const electricEngine = new ElectricEngine();
  
  const car1 = new Car(engine);
  const car2 = new Car(electricEngine);
  
  car1.start();  // Engine started
  car2.start();  // Electric engine started
  