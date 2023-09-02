import { describe } from "node:test";

import { calculate, math } from "../calculate";

describe("Calculate", () => {
    it("두 수를 더해서 결과를 반환하는 함수", () => {
        expect(calculate.add(1, 2)).toBe(3);
    });

    it("두 수를 빼서 결과를 반환하는 함수", () => {
        expect(calculate.sub(1, 2)).toBe(-1);
    });

    it("두 수를 곱해서 결과를 반환하는 함수", () => {
        expect(calculate.mul(3, 2)).toBe(6);
    });

    it("두 수를 나눠서 결과를 반환하는 함수", () => {
        expect(calculate.div(6, 2)).toBe(3);
    });
});

describe("Math", () => {
    const arr = [1, 2, 3, 4, 5];
    it("배열에 있는 모든 수를 더하는 함수", () => {
        expect(math.sum(arr)).toBe(15);
    });

    it("배열에 있는 모든 수를 곱하는 함수", () => {
        expect(math.fac(arr)).toBe(120);
    });

    it("배열에 있는 수의 평균을 반환하는 함수", () => {
        expect(math.avg(arr)).toBe(3);
    });
});
