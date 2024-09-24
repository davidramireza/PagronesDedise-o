interface BaseCar {
    showCost(): void;
  }
  
  // STEP 2
  class MastodonCar implements BaseCar {
    /** @override showCost() method */
    showCost(): void {
      console.log('[MASTODON] Car Cost: 300,000 MXN');
    }
  }
  
  class RhinoCar implements BaseCar {
    /** @implements showCost() method */
    showCost(): void {
      console.log('[RHINO] Car Cost: 100,000 MXN');
    }
  }
  
  // STEP 3
  interface CarFactory {
    makeCar(): BaseCar;
  }
  
  // STEP 4
  class MastodonCarFactory implements CarFactory {
    /**
     * @implements makeCar() method
     * @returns MastodonCar
     */
    makeCar(): BaseCar {
      return new MastodonCar();
    }
  }
  
  class RhinoCarFactory implements CarFactory {
    /**
     * @implements makeCar() method
     * @returns RhinoCar
     */
    makeCar(): BaseCar {
      return new RhinoCar();
    }
  }
  
  /**
   * Main function
   * @param factory Car factory
   */
  function appFactory(factory: CarFactory) {
    console.log('--- [TS] Calling appFactory ---\n');
    if (!factory) {
      console.log('--- No factory provided ---');
      return;
    }
  
    const car: BaseCar = factory.makeCar();
    car.showCost();
  }
  
  /**
   * We could change the kind of factory to use
   * since all of them implement the same behaviour.
   */
  appFactory(new MastodonCarFactory());
  appFactory(new RhinoCarFactory());
  
  type FactoryType = 'mastodon' | 'rhino';
  /**
   * Let's abstract the factories creation
   * @param type type of factory to create
   * @returns A car factory instance
   */
  function createFactory(type: FactoryType) {
    const factories = {
      mastodon: MastodonCarFactory,
      rhino: RhinoCarFactory,
    };
  
    const FactoryClass = factories[type];
    return new FactoryClass();
  }
  
  /**
   * Instead of using new() operator, we abstract the
   * factories creation and we just indicate the name
   */
  appFactory(createFactory('mastodon'));
  appFactory(createFactory('rhino'));
  
  // This is not relevant for the course, don't worry about this
  export {};