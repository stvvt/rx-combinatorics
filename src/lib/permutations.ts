import * as Rx from "rxjs";
import { factorial, histogram } from "./utils";

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

function count<T>(arr: T[]): number {
    const h = histogram(arr);
    let D: number = 1;

    h.forEach((f) => D *= factorial(f));

    return factorial(arr.length) / D;
}

export interface IPermutations {
    <T>(arr: T[]): IterableIterator<T[]>;
    count<T>(arr: T[]): number;
}

// tslint:disable-next-line:no-angle-bracket-type-assertion
export const permutations: IPermutations = <IPermutations>generator;
permutations.count = count;


export function permutations$<T>(arr: T[]): Rx.Observable<T[]> {
    return Rx.Observable.from<T[]>(permutations<T>(arr) as any);
}
