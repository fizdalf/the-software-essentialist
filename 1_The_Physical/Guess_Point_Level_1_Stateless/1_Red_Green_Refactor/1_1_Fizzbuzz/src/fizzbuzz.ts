function isFizz(givenNumber: number) {
    return givenNumber % 3 === 0;
}

function isBuzz(givenNumber: number) {
    return givenNumber % 5 === 0;
}

export function fizzbuzz(givenNumber: number): string {
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
