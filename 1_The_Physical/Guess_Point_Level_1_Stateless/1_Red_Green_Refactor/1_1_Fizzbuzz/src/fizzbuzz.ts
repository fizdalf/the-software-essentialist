export function fizzbuzz(givenNumber: number): string {
    if (givenNumber % 3 === 0) {
        return "Fizz";
    }
    if (givenNumber % 5 === 0) {
        return "Buzz";
    }

    return `${givenNumber}`;
}
