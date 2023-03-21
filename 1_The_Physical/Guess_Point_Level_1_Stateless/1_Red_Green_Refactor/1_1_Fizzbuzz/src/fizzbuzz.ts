export function fizzbuzz(givenNumber: number): string {
    if (givenNumber === 3) {
        return "Fizz";
    }
    if (givenNumber === 5) {
        return "Buzz";
    }

    return `${givenNumber}`;
}
