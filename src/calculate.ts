const calculate = {
    add: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
    mul: (a: number, b: number) => a * b,
    div: (a: number, b: number) => a / b,
};

const math = {
    sum: (arr: number[]) => arr.reduce((a, c) => a + c, 0),
    fac: (arr: number[]) => arr.reduce((a, c) => a * c, 1),
    avg(arr: number[]) {
        return this.sum(arr) / arr.length;
    },
};

export { calculate, math };
