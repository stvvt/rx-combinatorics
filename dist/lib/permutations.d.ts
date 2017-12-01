import * as Rx from "rxjs";
export declare function slide<T>(item: T, arr: T[]): Iterable<T[]>;
export declare function permutations<T>(arr: T[]): Iterable<T[]>;
export declare function rxPermutations<T>(arr: T[]): Rx.Observable<T[]>;
