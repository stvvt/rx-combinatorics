import * as Rx from "rxjs";
import { expect, withProvider, ISample } from "./setup";
import { samples } from "./fixtures/combinations.fixture";
import { combinations, rxCombinations } from "../src";

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

describe("combinations observable", () => {
    it("should be observable", () => {
        const observable = rxCombinations([1, 2, 3], 2);

        expect(observable).to.be.instanceof(Rx.Observable);
    });

    it("should generate unique combinations", () => {
        withProvider(samples, (sample) => {
            it(`should generate all ${sample.n}-combinations of array elements: ${sample.title}`, () => {
                const result: Array<typeof sample.input> = [];

                rxCombinations(sample.input, sample.n)
                    .subscribe((c) => result.push(c));

                expect(result).to.have.same.deep.members(sample.expectation);
            });
        });
    });
});
