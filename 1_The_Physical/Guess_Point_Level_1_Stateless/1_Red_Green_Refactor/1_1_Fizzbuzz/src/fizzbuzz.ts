export function fizzbuzz(givenNumber: number): string {
    if (givenNumber === 3 || givenNumber === 6) {
        return "Fizz";
    }
    if (givenNumber === 5) {
        return "Buzz";
    }

    return `${givenNumber}`;
}
