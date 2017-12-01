import { ISample } from "../setup";

export interface ICombinationsSample<T> extends ISample {
    input: T[];
    n: number;
}

export const samples: Array<ICombinationsSample<number>> = [{
    title: "empty",
    input: [],
    n: 1,
    expectation: [
    ],
}, {
    title: "full unique",
    input: [1, 2, 3],
    n: 3,
    expectation: [
        [1, 2, 3]
    ]
}, {
    title: "full with repetition",
    input: [1, 1, 1],
    n: 3,
    expectation: [
        [1, 1, 1]
    ]
}, {
    title: "n greater than the number of elements",
    input: [1, 2, 3],
    n: 4,
    expectation: [
    ]
}, {
    title: "n = 0",
    input: [1, 1, 2],
    n: 0,
    expectation: [
    ]
}, {
    title: "n < 0",
    input: [1, 2, 1, 2],
    n: -1,
    expectation: [
    ]
}, {
    title: "straight case unique",
    input: [1, 2, 3, 4],
    n: 3,
    expectation: [
        [1, 2, 3],
        [1, 2, 4],
        [1, 3, 4],
        [2, 3, 4],
    ]
}, {
    title: "straight case non-unique",
    input: [1, 2, 3, 3],
    n: 3,
    expectation: [
        [1, 2, 3],
        [1, 3, 3],
        [2, 3, 3],
    ]
}, {
    title: "straight case non-unique (1)",
    input: [1, 1, 2, 3],
    n: 3,
    expectation: [
        [1, 2, 3],
        [1, 1, 2],
        [1, 1, 3]
    ]
}];
