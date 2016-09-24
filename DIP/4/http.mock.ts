import { IHttp } from './http';

export class MockHttp implements IHttp {
    constructor(d: any) {
    }
    get(url: string): any {
        // ..
    }
}