import { add } from './index';

describe("Sum", () => {
    test("should calculate the sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
});
