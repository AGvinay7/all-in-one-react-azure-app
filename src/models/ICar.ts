import { IBike } from "./IBike";

export interface ICar extends IBike {
    type?: string,
    transmission?:string
}