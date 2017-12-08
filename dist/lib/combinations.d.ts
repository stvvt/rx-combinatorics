import * as Rx from "rxjs";
export interface ICombinations {
    <T>(arr: T[], n: number): IterableIterator<T[]>;
    count<T>(arr: T[], n: number): number;
}
export declare const combinations: ICombinations;
export declare function combinations$<T>(arr: T[], n: number): Rx.Observable<T[]>;
