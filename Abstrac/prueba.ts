// declaramos interfaces por cada producto base
interface Cpu {
    setSeries(series: string): void;
  }
  
  interface Memory {
    setCapacityInGb(gb: number): void;
  }
  
  interface Display {
    setResolution(): void;
  }
  
  // declaramos class por cada producto en concreto
  class PhoneCpu implements Cpu {
    setSeries(series: string): void {
      console.log(`Phone ${series}`);
    }
  }
  
  class LaptopCpu implements Cpu {
    setSeries(series: string): void {
      console.log(`Laptop ${series}`);
    }
  }
  
  class TabletCpu implements Cpu {
    setSeries(series: string): void {
      console.log(`Tablet ${series}`);
    }
  }
  
  class PhoneMemory implements Memory {
    setCapacityInGb(gb: number): void {
      console.log(`Phone ${gb}gb`);
    }
  }
  
  class LaptopMemory implements Memory {
    setCapacityInGb(gb: number): void {
      console.log(`Laptop ${gb}gb`);
    }
  }
  
  class TabletMemory implements Memory {
    setCapacityInGb(gb: number): void {
      console.log(`Tablet ${gb}gb`);
    }
  }
  
  class PhoneDisplay implements Display {
    setResolution(): void {
      console.log("Phone resolution...");
    }
  }
  
  class LaptopDisplay implements Display {
    setResolution(): void {
      console.log("Laptop resolution...");
    }
  }
  
  class TabletDisplay implements Display {
    setResolution(): void {
      console.log("Tablet resolution...");
    }
  }
  
  // declaramos interface para abstract factory
  interface AFactory {
    createCpu(): Cpu;
    createMemory(): Memory;
    createDisplay(): Display;
  }
  
  // declaramos class para fabricas concretas de productos
  class PhoneFactory implements AFactory {
    createCpu(): Cpu {
      return new PhoneCpu();
    }
    createMemory(): Memory {
      return new PhoneMemory();
    }
    createDisplay(): Display {
      return new PhoneDisplay();
    }
  }
  
  class LaptopFactory implements AFactory {
    createCpu(): Cpu {
      return new LaptopCpu();
    }
    createMemory(): Memory {
      return new LaptopMemory();
    }
    createDisplay(): Display {
      return new LaptopDisplay();
    }
  }
  
  class TabletFactory implements AFactory {
    createCpu(): Cpu {
      return new TabletCpu();
    }
    createMemory(): Memory {
      return new TabletMemory();
    }
    createDisplay(): Display {
      return new TabletDisplay();
    }
  }
  
  // funciones de implementacion
  const appFactoryNew = (factory: AFactory) => {
    const cpu = factory.createCpu();
    const memory = factory.createMemory();
    const display = factory.createDisplay();
  
    cpu.setSeries("i5");
    memory.setCapacityInGb(512);
    display.setResolution();
  };
  
  type FactoryTypeNew = "phone" | "laptop" | "tablet";
  
  const createFactoryNew = (type: FactoryTypeNew) => {
    const factories = { phone: PhoneFactory, laptop: LaptopFactory, tablet: TabletFactory };
    const Factory = factories[type];
    return new Factory();
  };
  
  appFactoryNew(createFactoryNew("phone"));
  appFactoryNew(createFactoryNew("laptop"));
  appFactoryNew(createFactoryNew("tablet"));