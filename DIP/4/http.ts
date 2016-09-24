export class Http implements IHttp {
    get(url: string): any {
        // ..
    }
}
export interface IHttp {
    get(url: string): any;
}