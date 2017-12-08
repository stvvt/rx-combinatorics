import * as memoize from "fast-memoize";

export function histogram<T>(arr: T[]): Map<T, number> {
    return arr.reduce((acc, item) => {
        acc.set(item, (acc.has(item) ? acc.get(item) as number : 0) + 1);
        return acc;
    }, new Map<T, number>());
}

export function unique<T>(arr: T[]): Iterable<T> {
    return histogram<T>(arr).keys();
}

export const factorial = memoize(
    (n: number): number => {
        if (n < 0) {
            throw new Error("Out of bounds");
        }
        if (n < 2) {
            return 1;
        }

        return n * factorial(n - 1);
    }
);
