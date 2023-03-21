export function fizzbuzz(givenNumber: number): string {
    if (givenNumber < 1) {
        throw new Error('Provide a number between 1 and 100');
    }
    if (isFizz(givenNumber) && isBuzz(givenNumber)) {
        return "FizzBuzz";
    }
    if (isFizz(givenNumber)) {
        return "Fizz";
    }
    if (isBuzz(givenNumber)) {
        return "Buzz";
    }

    return `${givenNumber}`;
}

function isFizz(givenNumber: number) {
    return givenNumber % 3 === 0;
}

function isBuzz(givenNumber: number) {
    return givenNumber % 5 === 0;
}
