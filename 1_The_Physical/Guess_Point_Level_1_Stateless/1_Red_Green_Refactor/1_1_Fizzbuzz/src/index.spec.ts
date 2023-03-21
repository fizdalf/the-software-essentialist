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
    it("should return 'Buzz' when given 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });
    it("should return 'Fizz' when given 6", () => {
        expect(fizzbuzz(6)).toBe("Fizz");
    });
    it("should return 'Fizz' when given 9", () => {
        expect(fizzbuzz(9)).toBe("Fizz");
    });
    it("should return 'Buzz' when given 10", () => {
        expect(fizzbuzz(10)).toBe("Buzz");
    });
    it("should return 'FizzBuzz' when given 15", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });
});
