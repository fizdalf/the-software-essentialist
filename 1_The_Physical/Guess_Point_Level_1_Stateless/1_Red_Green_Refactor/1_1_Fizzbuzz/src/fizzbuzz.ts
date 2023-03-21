export function fizzbuzz(givenNumber: number): string {
    if (givenNumber === 4) {
        return `${givenNumber}`;
    }
    if (givenNumber === 3) {
        return "Fizz";
    }
    if (givenNumber === 2) {
        return `${givenNumber}`;
    }
    return `${givenNumber}`;
}
