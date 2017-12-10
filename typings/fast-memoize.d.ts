declare module "fast-memoize" {
    type Memoize  = <T extends (...args: any[]) => any>(fn: T) => T;

    const memoize: Memoize;

    export = memoize;
}
