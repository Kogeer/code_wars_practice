const makeStrings = (s: string): string => {
    return s.split(' ').map(chars => chars.charAt(0)).join('');
}

// console.log(makeStrings('Hola Bola'));

function basicOp(operation: string, value1: number, value2: number): number {
    const doOperation = {
        '+' : ():number => value1 + value2,
        '-' : ():number => value1 - value2,
        '*' : ():number => value1 * value2,
        '/' : ():number => value1 / value2,
    }

    return doOperation[operation]();
}

// console.log(basicOp('+',2,3));

export function findShort(s: string): number {
    const splittedWords = s.split(' ');
    let shortesLength = splittedWords[0].length;

    splittedWords.forEach(word => {
        if (word.length <= shortesLength) {
            shortesLength = word.length;
        }
    });

    return shortesLength;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(findShort("lets talk about javascript the best language"));
// console.log(findShort("i want to travel the world writing code one day"));
// console.log(findShort("Lets all go on holiday somewhere very cold"));
// console.log(findShort("Let's travel abroad shall we"));