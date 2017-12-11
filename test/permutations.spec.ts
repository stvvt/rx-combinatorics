import * as Rx from "rxjs";
import { permutations, permutations$ } from "../src";
import { slide } from "../src/lib/permutations";
import { samples, slideSamples } from "./fixtures/permutations.fixture";
import { expect, withProvider, ISample } from "./setup";

describe("permutations", () => {
    withProvider(samples, (sample) => {
        it(`should generate all permutations of array elements: ${sample.title}`, () => {
            const result = [];
            for (const p of permutations(sample.input)) {
                result.push(p);
            }

            expect(result).to.have.same.deep.members(sample.expectation);
        });
    });

    it("should be reasonably fast", () => {
        const input = "пекрнаа";
        const expectations = [
            "пекарна",
            "перкана"
        ];
        let foundCount = 0;
        for (const p of permutations(input.split(""))) {
            if (expectations.indexOf(p.join("")) >= 0) {
                foundCount++;
            }
        }

        expect(foundCount).to.be.equal(expectations.length);
    });
});

describe("permutations counter", () => {
    withProvider(samples, (sample) => {
        it(`should return correct count - ${sample.title}`, () => {
            expect(permutations.count(sample.input)).to.be.equal(sample.expectation.length);
        });
    });

    it("real world bug related ", () => {
        expect(permutations.count([1, 2, 3, 4])).to.be.equal(24);
        expect(permutations.count([1, 2, 3, 3])).to.be.equal(12);
        expect(permutations.count([1, 3, 3, 4])).to.be.equal(12);
        expect(permutations.count([2, 3, 3, 4])).to.be.equal(12);
    });
});

describe("slide", () => {
    withProvider(slideSamples, (sample) => {
        it(`should insert new element in every position: ${sample.title}`, () => {
            const result = [];
            for (const i of slide(sample.item, sample.input)) {
                result.push(i);
            }

            expect(result).to.have.same.deep.members(sample.expectation);

        });
    });
});

describe("permutations observable", () => {
    it("should be observable", () => {
        const observable = permutations.observable([1, 2, 3]);
        expect(observable).to.be.instanceof(Rx.Observable);
    });

    it("should emit unique permutations", () => {
        withProvider(samples, (sample) => {
            it(`should generate all permutations of array elements: ${sample.title}`, () => {
                const result: Array<typeof sample.input> = [];

                permutations.observable(sample.input)
                    .subscribe((c) => result.push(c));

                expect(result).to.have.same.deep.members(sample.expectation);
            });
        });
    });
});
