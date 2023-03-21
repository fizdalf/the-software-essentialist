import {fizzbuzz} from './fizzbuzz';

describe("fizzbuzz", () => {
    it("should return '1' when given 1", () => {
        expect(fizzbuzz(1)).toBe("1");
    });
    it("should return '2' when given 2", () => {
        expect(fizzbuzz(2)).toBe("2");
    });
    it("should return 'Fizz' when given 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });
    it("should return '4' when given 4", () => {
        expect(fizzbuzz(4)).toBe("4");
    });
});
