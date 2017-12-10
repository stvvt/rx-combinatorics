"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memoize = require("fast-memoize");
function histogram(arr) {
    return arr.reduce(function (acc, item) {
        acc.set(item, (acc.has(item) ? acc.get(item) : 0) + 1);
        return acc;
    }, new Map());
}
exports.histogram = histogram;
function unique(arr) {
    return histogram(arr).keys();
}
exports.unique = unique;
exports.factorial = memoize(function (n) {
    if (n < 0) {
        throw new Error("Out of bounds");
    }
    if (n < 2) {
        return 1;
    }
    return n * exports.factorial(n - 1);
});
