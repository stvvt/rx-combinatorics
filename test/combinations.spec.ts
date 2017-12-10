import * as Rx from "rxjs";
import { expect, withProvider, ISample } from "./setup";
import { samples, samplesCount } from "./fixtures/combinations.fixture";
import { combinations, combinations$ } from "../src";

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
        it(`should return correct count - ${sample.title}`, () => {
            expect(combinations.count(sample.input, sample.n, sample.ordered)).to.be.equal(sample.expectation.length);
        });
    });
});

describe("combinations observable", () => {
    it("should be observable", () => {
        const observable = combinations.observable([1, 2, 3], 2);

        expect(observable).to.be.instanceof(Rx.Observable);
    });

    it("should generate unique combinations", () => {
        withProvider(samples, (sample) => {
            it(`should generate all ${sample.n}-combinations of array elements: ${sample.title}`, () => {
                const result: Array<typeof sample.input> = [];

                combinations.observable(sample.input, sample.n)
                    .subscribe((c) => result.push(c));

                expect(result).to.have.same.deep.members(sample.expectation);
            });
        });
    });
});
