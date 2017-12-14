export declare function slide<T>(item: T, arr: T[]): Iterable<T[]>;
export interface IPermutations {
    <T>(arr: T[]): IterableIterator<T[]>;
    count<T>(arr: T[]): number;
}
export declare const permutations: IPermutations;
