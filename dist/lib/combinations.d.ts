export declare function binomialCoefficient(n: number, k: number): number;
export interface ICombinations {
    <T>(arr: T[], n: number): IterableIterator<T[]>;
    count<T>(arr: T[], n: number, ordered?: boolean): number;
}
export declare const combinations: ICombinations;
