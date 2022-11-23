import { Context } from "grammy";
export interface Button {
    text: string;
    payload: string;
}
export interface RowButton<C extends Context = Context> extends Button {
    callback: (ctx: C) => void;
    submenu?: string;
}
interface Result<C extends Context = Context> {
    rows: RowButton<C>[];
    pagination: Button[];
    count: number;
    index: number;
    empty: null[];
}
export declare function paginate<C extends Context = Context>(array: RowButton<C>[], pageSize: number, index: number): Result<C>;
export {};