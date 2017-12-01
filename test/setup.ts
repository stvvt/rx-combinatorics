import { expect } from "chai";

export interface ISample {
    title?: string;
    expectation: any;
    [name: string]: any;
}

export function withProvider<T extends ISample>(samples: T[], itFn: (sample: T) => void): void {
    samples.filter((sample) => typeof (sample as any).title !== "undefined").forEach(itFn);
}

export { expect } from "chai";
