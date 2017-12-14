import { expect, withProvider, ISample } from "./setup";
import { samples, samplesCount } from "./fixtures/combinations.fixture";
import { combinations, permutations, combinations$ } from "../src";
import { binomialCoefficient } from "../src/lib/combinations";

describe("combinations generator", () => {

    withProvider(samples, (sample) => {
        it(`should generate all ${sample.n}-combinations of array elements: ${sample.title}`, () => {
            const result = [];
            for (const p of combinations(sample.input, sample.n)) {
                result.push(p);
            }

            expect(result).to.have.same.deep.members(sample.expectation);
        });
    });
});

describe("combinations counter", () => {
    it("should return count for one unique element", () => {
        expect(combinations.count([1], 100)).to.be.equal(0);
        expect(combinations.count([1, 1, 1, 1], 5)).to.be.equal(0);
        expect(combinations.count([1, 1, 1, 1, 1], 5)).to.be.equal(1);
        expect(combinations.count([1, 1, 1, 1, 1, 1], 5)).to.be.equal(1);
    });

    it("when n = 1, should return the number of unique elements", () => {
        expect(combinations.count([1, 1, 2, 2, 2, 3], 1)).to.be.equal(3);
    });

    withProvider(samplesCount, (sample) => {
        it(`should return the number of generated items - ${sample.title}`, () => {
            let expectedCount = 0;
            for (const c of combinations(sample.input, sample.n)) {
                if (sample.ordered) {
                    for (const p of permutations(c)) {
                        expectedCount++;
                    }
                } else {
                    expectedCount++;
                }
            }
            expect(combinations.count(sample.input, sample.n, sample.ordered))
                .to.be.equal(expectedCount);
        });
    });

    it("real world bug related", () => {
        expect(combinations.count([1], 2, true)).to.be.equal(0);
        expect(combinations.count([1], 1, true)).to.be.equal(1);
        expect(combinations.count([1], 0, true)).to.be.equal(0);
        expect(combinations.count([1, 1], 2, true)).to.be.equal(1);
        expect(combinations.count([3, 4, 3], 2, true)).to.be.equal(3);
    });
});

describe("binomialCoeficient", () => {
    it("(2, 0)", () => {
        expect(binomialCoefficient(2, 0)).to.be.equal(1);
    });
    it("(2, 1)", () => {
        expect(binomialCoefficient(2, 1)).to.be.equal(2);
    });
    it("(2, 2)", () => {
        expect(binomialCoefficient(2, 2)).to.be.equal(1);
    });
});
