import { ISample } from "../setup";

export const samples: ISample[] = [{
    title: "one element",
    input: [1],
    expectation: [
        [1]
    ],
}, {
    title: "two unique elements",
    input: [1, 2],
    expectation: [
        [1, 2],
        [2, 1]
    ]
}, {
    title: "two equal elements",
    input: [1, 1],
    expectation: [
        [1, 1]
    ]
}, {
    title: "3 unique elements",
    input: [1, 2, 3],
    expectation: [
        [1, 2, 3],
        [2, 1, 3],
        [2, 3, 1],
        [1, 3, 2],
        [3, 1, 2],
        [3, 2, 1]
    ]
}, {
    title: "repeating elements",
    input: [1, 1, 2],
    expectation: [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 2]
    ]
}, {
    title: "another repeating elements",
    input: [1, 2, 1, 2],
    expectation: [
        [1, 2, 1, 2],
        [2, 1, 1, 2],
        [1, 1, 2, 2],
        [2, 1, 2, 1],
        [1, 2, 2, 1],
        [2, 2, 1, 1],
    ]
}, {
    title: "another repeating elements (1)",
    input: [1, 2, 3, 1],
    expectation: [
        [1, 2, 3, 1],
        [1, 3, 2, 1],
        [2, 3, 1, 1],
        [3, 2, 1, 1],
        [1, 1, 2, 3],
        [1, 1, 3, 2],
        [2, 1, 1, 3],
        [3, 1, 1, 2],
        [1, 2, 1, 3],
        [1, 3, 1, 2],
        [2, 1, 3, 1],
        [3, 1, 2, 1],
    ]
}];

export const slideSamples: ISample[] = [{
    title: "one element",
    input: [3],
    item: 2,
    expectation: [
        [2, 3],
        [3, 2],
    ]
}, {
    title: "unique elements",
    input: [1, 2, 3],
    item: 4,
    expectation: [
        [4, 1, 2, 3],
        [1, 4, 2, 3],
        [1, 2, 4, 3],
        [1, 2, 3, 4]
    ]
}, {
    title: "existing elements",
    input: [1, 2, 3],
    item: 3,
    expectation: [
        [3, 1, 2, 3],
        [1, 3, 2, 3],
        [1, 2, 3, 3]
    ]
}, {
    title: "same elements",
    input: [1, 1, 1],
    item: 1,
    expectation: [
        [1, 1, 1, 1]
    ]
}, {
    title: "repeating elements",
    input: [1, 2, 1],
    item: 1,
    expectation: [
        [1, 1, 2, 1],
    ]
}];
