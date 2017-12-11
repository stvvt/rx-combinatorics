"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
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
function reduceIterable(iterable, reduceFn, init) {
    var result = init;
    try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var v = iterable_1_1.value;
            result = reduceFn(result, v);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
    var e_1, _a;
}
exports.reduceIterable = reduceIterable;
exports.factorial = memoize(function (n) {
    if (n < 0) {
        throw new Error("Out of bounds");
    }
    if (n < 2) {
        return 1;
    }
    return n * exports.factorial(n - 1);
});
//# sourceMappingURL=utils.js.map