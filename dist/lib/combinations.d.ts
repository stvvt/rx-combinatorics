import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
export declare function binomialCoefficient(n: number, k: number): number;
export interface ICombinations {
    <T>(arr: T[], n: number): IterableIterator<T[]>;
    count<T>(arr: T[], n: number, ordered?: boolean): number;
    observable<T>(arr: T[], n: number): Observable<T[]>;
}
export declare const combinations: ICombinations;
/**
 * @deprecated
 */
export declare function combinations$<T>(arr: T[], n: number): Observable<T[]>;
