import {fizzbuzz} from './fizzbuzz';

describe("fizzbuzz", () => {
    it("should return the given number as string", () => {
        expect(fizzbuzz(1)).toBe("1");
        expect(fizzbuzz(2)).toBe("2");
        expect(fizzbuzz(4)).toBe("4");
    });
    it("should return 'Fizz' when given multiples of 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
        expect(fizzbuzz(6)).toBe("Fizz");
        expect(fizzbuzz(9)).toBe("Fizz");
    });
    it("should return 'Buzz' when given multiples of 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
        expect(fizzbuzz(10)).toBe("Buzz");
    });
    it("should return 'FizzBuzz' when given multiples of both 3 and 5", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });
    it("should error when given numbers smaller than 1", () => {
        expect(() => fizzbuzz(0)).toThrow("Provide a number between 1 and 100");
    });
    it("should error when given numbers greater than 100", () => {
        expect(() => fizzbuzz(101)).toThrow("Provide a number between 1 and 100");
    });
});
