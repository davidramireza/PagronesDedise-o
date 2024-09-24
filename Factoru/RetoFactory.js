class HttpAdapter {
    constructor(type) {
        this._type = type;
    }
    get() {
        throw new Error('Methor not implemented')
    }
    post() {
        throw new Error('Methor not implemented')
    }
    put() {
        throw new Error('Methor not implemented')
    }
    delete() {
        throw new Error('Methor not implemented')
    }
    getType() {
        return this._type;
    }
}

class Express extends HttpAdapter {
    constructor() {
        super('Express');
    }
    get() {
        console.log(`get Method for ${this._type} adapter`);
    }
    post() {
        console.log(`post Method for ${this._type} adapter`);
    }
    put() {
        console.log(`put Method for ${this._type} adapter`);
    }
    delete() {
        console.log(`delete Method for ${this._type} adapter`);
    }
}
class NestJs extends HttpAdapter {
    constructor() {
        super('NestJs');
    }
    get() {
        console.log(`get Method for ${this._type} adapter`);
    }
    post() {
        console.log(`post Method for ${this._type} adapter`);
    }
    put() {
        console.log(`put Method for ${this._type} adapter`);
    }
    delete() {
        console.log(`delete Method for ${this._type} adapter`);
    }
}

class HttpAdaptrFactory {
    makeAdapter() {
        throw new Error('Method not implement')
    }
}

class ExpressFactory extends HttpAdaptrFactory {
    makeAdapter() {
        return new Express();
    }
}

class NestJsFactory extends HttpAdaptrFactory {
    makeAdapter() {
        return new NestJs();
    }
}

function appAdapter (adapter) {
    const httpAdapter = adapter.makeAdapter()
    httpAdapter.get();
    httpAdapter.post();
    httpAdapter.put();
    httpAdapter.delete();
    console.log(httpAdapter.getType())
}

function createAdaper(type) {
    const adapters = {
        'express': ExpressFactory,
        'nestjs': NestJsFactory
    }
    
    const Adapters = adapters[type]
    return new Adapters()
}

appAdapter(createAdaper('express'))
appAdapter(createAdaper('nestjs'))