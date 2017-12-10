export declare function histogram<T>(arr: T[]): Map<T, number>;
export declare function unique<T>(arr: T[]): Iterable<T>;
export declare function reduceIterable<V, R>(iterable: Iterable<V>, reduceFn: (a: R, v: V) => R, init: R): R;
export declare const factorial: (n: number) => number;
