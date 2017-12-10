import { expect } from "./setup";
import { unique, histogram, factorial } from "../src/lib/utils";

describe("histogram", () => {
    it("should return histogram", () => {
        const h = histogram([1, 2, 3, 1, 2]);

        expect(h).to.be.instanceof(Map);
        expect(Array.from(h.keys())).to.have.same.deep.members([1, 2, 3]);
        expect(h.get(1)).to.be.equal(2);
        expect(h.get(2)).to.be.equal(2);
        expect(h.get(3)).to.be.equal(1);
    });
});

describe("unique", () => {
    it("should return unique elements of a multiset", () => {
        expect(Array.from(unique([1, 2, 3, 1, 2]))).to.have.same.members([1, 2, 3]);
    });
});

describe("factorial", () => {
    it("should throw for negative numbers", () => {
        expect(factorial.bind(null, -1)).to.throw("Out of bounds");
    });

    it("should return 1 for n = 0", () => {
        expect(factorial(0)).to.be.equal(1);
    });

    it("should return the product of first n positive numbers", () => {
        expect(factorial(1)).to.be.equal(1);
        expect(factorial(2)).to.be.equal(2);
        expect(factorial(3)).to.be.equal(2 * 3);
        expect(factorial(4)).to.be.equal(2 * 3 * 4);
    });
});
