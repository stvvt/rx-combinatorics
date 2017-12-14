import { factorial, histogram, reduceIterable } from "./utils";

function insert<T>(item: T, pos: number, arr: T[]): T[] {
    const result = arr.slice();
    result.splice(pos, 0, item);
    return result;
}

export function* slide<T>(item: T, arr: T[]): Iterable<T[]> {
    const seen = false;

    for (let i = 0; i <= arr.length; i++) {
        yield insert(item, i, arr);
        if (item === arr[i]) {
            return;
        }
    }
}

function* generator<T>(arr: T[]): Iterable<T[]> {
    if (arr.length <= 1) {
        return yield arr;
    }

    const [first, ...rest] = arr;

    for (const p of permutations(rest)) {
        yield* slide(first, p);
    }
}

export interface IPermutations {
    <T>(arr: T[]): IterableIterator<T[]>;
    count<T>(arr: T[]): number;
}

// tslint:disable-next-line:no-angle-bracket-type-assertion
export const permutations: IPermutations = <IPermutations> generator;
permutations.count = <T>(arr: T[]): number => {
    const h = histogram(arr);
    const D = reduceIterable(h.values(), (acc, f) => acc * factorial(f), 1);

    return factorial(arr.length) / D;
};
