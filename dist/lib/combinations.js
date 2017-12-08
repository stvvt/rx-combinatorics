"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var utils_1 = require("./utils");
function generator(arr, n) {
    var _a, _b, item, e_1_1, _c, first, rest, dups, _d, _e, c, e_2_1, e_1, _f, e_2, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!(n >= arr.length || n <= 1)) return [3 /*break*/, 11];
                if (!(n === arr.length)) return [3 /*break*/, 2];
                return [4 /*yield*/, arr];
            case 1:
                _h.sent();
                return [3 /*break*/, 10];
            case 2:
                if (!(n === 1)) return [3 /*break*/, 10];
                _h.label = 3;
            case 3:
                _h.trys.push([3, 8, 9, 10]);
                _a = __values(utils_1.unique(arr)), _b = _a.next();
                _h.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 7];
                item = _b.value;
                return [4 /*yield*/, [item]];
            case 5:
                _h.sent();
                _h.label = 6;
            case 6:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _h.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
            case 11:
                _c = __read(arr), first = _c[0], rest = _c.slice(1);
                return [5 /*yield**/, __values(exports.combinations(rest, n))];
            case 12:
                _h.sent();
                dups = rest.indexOf(first) >= 0;
                _h.label = 13;
            case 13:
                _h.trys.push([13, 18, 19, 20]);
                _d = __values(exports.combinations(rest, n - 1)), _e = _d.next();
                _h.label = 14;
            case 14:
                if (!!_e.done) return [3 /*break*/, 17];
                c = _e.value;
                if (!(!dups || c.indexOf(first) >= 0)) return [3 /*break*/, 16];
                return [4 /*yield*/, __spread([first], c)];
            case 15:
                _h.sent();
                _h.label = 16;
            case 16:
                _e = _d.next();
                return [3 /*break*/, 14];
            case 17: return [3 /*break*/, 20];
            case 18:
                e_2_1 = _h.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 20];
            case 19:
                try {
                    if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 20: return [2 /*return*/];
        }
    });
}
function count(arr, n) {
    // tslint:disable-next-line:no-shadowed-variable
    function innerCount(step, S, n) {
        var result = 0;
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
                for (var i = 0; i <= frequencies[step]; i++) {
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
    var h = utils_1.histogram(arr);
    if (h.size === arr.length) {
        return utils_1.factorial(arr.length) / (utils_1.factorial(n) * utils_1.factorial(arr.length - n));
    }
    var frequencies = [];
    var sum = 0;
    h.forEach(function (f) {
        var m = f > n ? n : f;
        frequencies.push(m);
        sum += m;
    });
    return innerCount(0, sum, n);
}
// tslint:disable-next-line:no-angle-bracket-type-assertion
exports.combinations = generator;
exports.combinations.count = count;
exports.combinations.observable = function (arr, n) {
    return Rx.Observable.from(exports.combinations(arr, n));
};
/**
 * @deprecated
 */
function combinations$(arr, n) {
    return Rx.Observable.from(exports.combinations(arr, n));
}
exports.combinations$ = combinations$;
