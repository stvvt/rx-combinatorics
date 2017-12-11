import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
export declare function slide<T>(item: T, arr: T[]): Iterable<T[]>;
export interface IPermutations {
    <T>(arr: T[]): IterableIterator<T[]>;
    count<T>(arr: T[]): number;
    observable<T>(arr: T[]): Observable<T[]>;
}
export declare const permutations: IPermutations;
/**
 * @deprecated
 */
export declare function permutations$<T>(arr: T[]): Observable<T[]>;
