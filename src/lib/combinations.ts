import * as Rx from "rxjs";
import { unique, histogram, factorial } from "./utils";

function* generator<T>(arr: T[], n: number): IterableIterator<T[]> {
    if (n >= arr.length || n <= 1) {
        if (n === arr.length) {
            yield arr;
        } else if (n === 1) {
            for (const item of unique(arr)) {
                yield [item];
            }
        }
        return;
    }

    const [first, ...rest] = arr;

    yield* combinations(rest, n);

    const dups = rest.indexOf(first) >= 0;

    for (const c of combinations(rest, n - 1)) {
        if (!dups || c.indexOf(first) >= 0) {
            yield [first, ...c];
        }
    }
}

function count<T>(arr: T[], n: number): number {
    // tslint:disable-next-line:no-shadowed-variable
    function innerCount(step: number, S: number, n: number): number {
        let result = 0;

        switch (true) {
            case S < n:
                result = 0;
                break;
            case S === n:
                result = 1;
                break;
            case n === 1:
                result = frequencies.length - step;
                break;
            default: {
                S = S - frequencies[step];
                for (let i = 0; i <= frequencies[step]; i++) {
                    result += innerCount(step + 1, S, n - i);
                }

                result += frequencies[step] < n ? 0 : 1;
            }
        }

        return result;
    }

    if (n <= 0) {
        return 0;
    }
    if (arr.length < n) {
        return 0;
    }

    const h = histogram(arr);

    if (h.size === arr.length) {
        return factorial(arr.length) / (factorial(n) * factorial(arr.length - n));
    }

    const frequencies: number[] = [];
    let sum = 0;

    h.forEach((f) => {
        const m = f > n ? n : f;
        frequencies.push(m);
        sum += m;
    });

    return innerCount(0, sum, n);
}

export interface ICombinations {
    <T>(arr: T[], n: number): IterableIterator<T[]>;
    count<T>(arr: T[], n: number): number;
}

// tslint:disable-next-line:no-angle-bracket-type-assertion
export const combinations: ICombinations = <ICombinations>generator;
combinations.count = count;

export function combinations$<T>(arr: T[], n: number): Rx.Observable<T[]> {
    return Rx.Observable.from<T[]>(combinations<T>(arr, n) as any);
}
