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
function insert(item, pos, arr) {
    var result = arr.slice();
    result.splice(pos, 0, item);
    return result;
}
function slide(item, arr) {
    var seen, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                seen = false;
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i <= arr.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, insert(item, i, arr)];
            case 2:
                _a.sent();
                if (item === arr[i]) {
                    return [2 /*return*/];
                }
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.slide = slide;
function permutations(arr) {
    var _a, first, rest, _b, _c, p, e_1_1, e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!(arr.length <= 1)) return [3 /*break*/, 2];
                return [4 /*yield*/, arr];
            case 1: return [2 /*return*/, _e.sent()];
            case 2:
                _a = __read(arr), first = _a[0], rest = _a.slice(1);
                _e.label = 3;
            case 3:
                _e.trys.push([3, 8, 9, 10]);
                _b = __values(permutations(rest)), _c = _b.next();
                _e.label = 4;
            case 4:
                if (!!_c.done) return [3 /*break*/, 7];
                p = _c.value;
                return [5 /*yield**/, __values(slide(first, p))];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                _c = _b.next();
                return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
        }
    });
}
exports.permutations = permutations;
