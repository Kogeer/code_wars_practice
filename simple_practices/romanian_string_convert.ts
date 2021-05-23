const romanianAlphabetNumbers = {
    one: 'I',
    two: 'II',
    three: 'III',
    four: 'IV',
    five: 'V',
    six: 'VI',
    seven: 'VII',
    eight: 'VIII',
    nine: 'IX',
    ten: 'X',
    fifty: 'L',
    oneHundred: 'C',
    fiveHundred: 'D',
    oneThousand: 'M'
};

const convert = (number: number): string => {
    const digits = number.toString().split('').reverse().map(num => +num);
    let thousands = digits[3];
    let hundreds = digits[2];
    let decimals = digits[1];
    let singles = digits[0];

    let romanianNumbers = '';

    while (thousands) {
        romanianNumbers += romanianAlphabetNumbers.oneThousand;
        thousands = thousands - 1;
    }

    while (hundreds) {
        if (hundreds % 9 === 0) {
            romanianNumbers += romanianAlphabetNumbers.oneHundred;
            romanianNumbers += romanianAlphabetNumbers.oneThousand;
            hundreds = hundreds - 9;
            continue;
        }

        if (hundreds % 5 === 0 || hundreds / 5 >= 1) {
            romanianNumbers += romanianAlphabetNumbers.fiveHundred;
            hundreds = hundreds - 5;
            continue;
        }

        if (hundreds % 4 === 0 && digits[3]) {
            romanianNumbers += romanianAlphabetNumbers.oneHundred;
            romanianNumbers += romanianAlphabetNumbers.fiveHundred;
            hundreds = hundreds - 4;
            continue;
        }

        if (hundreds % 4 === 0 && !digits[3]) {
            romanianNumbers += romanianAlphabetNumbers.oneHundred;
            romanianNumbers += romanianAlphabetNumbers.fiveHundred;
            hundreds = hundreds - 4;
            continue;
        }

        romanianNumbers += romanianAlphabetNumbers.oneHundred;
        hundreds = hundreds - 1;
    }

    while (decimals) {
        if (decimals % 9 === 0 && digits[2]) {
            romanianNumbers += romanianAlphabetNumbers.ten;
            romanianNumbers += romanianAlphabetNumbers.oneHundred;
            decimals = decimals - 9;
            continue;
        }

        if (decimals % 9 === 0 && !digits[2]) {
            romanianNumbers += romanianAlphabetNumbers.ten;
            romanianNumbers += romanianAlphabetNumbers.oneHundred;
            decimals = decimals - 9;
            continue;
        }

        if (decimals % 5 === 0 || decimals / 5 > 1) {
            romanianNumbers += romanianAlphabetNumbers.fifty;
            decimals = decimals - 5;
            continue;
        }

        if (decimals % 4 === 0 && digits[2]) {
            romanianNumbers += romanianAlphabetNumbers.ten;
            romanianNumbers += romanianAlphabetNumbers.fifty;
            decimals = decimals - 4;
            continue;
        }

        if (decimals % 4 === 0 && !digits[2]) {
            romanianNumbers += romanianAlphabetNumbers.ten;
            romanianNumbers += romanianAlphabetNumbers.fifty;
            decimals = decimals - 4;
            continue;
        }

        romanianNumbers += romanianAlphabetNumbers.ten;
        decimals = decimals - 1;
    }

    while (singles) {
        if (singles % 9 === 0) {
            romanianNumbers += romanianAlphabetNumbers.one;
            romanianNumbers += romanianAlphabetNumbers.ten;
            singles = singles - 9;
            continue;
        }
        if (singles % 8 === 0) {
            romanianNumbers += romanianAlphabetNumbers.eight;
            singles = singles - 8;
            continue;
        }
        if (singles % 5 === 0 || singles / 5 > 1) {
            romanianNumbers += romanianAlphabetNumbers.five;
            singles = singles - 5;
            continue;
        }
        if (singles % 4 === 0) {
            romanianNumbers += romanianAlphabetNumbers.four;
            singles = singles - 4;
            continue;
        }
        romanianNumbers += romanianAlphabetNumbers.one;
        singles = singles - 1;
    }

    return romanianNumbers;
};

// console.log(convert(1000));
// console.log(convert(600));
// console.log(convert(400));
// console.log(convert(900));
// console.log(convert(1));
// console.log(convert(1990));
// console.log(convert(2008));
// console.log(convert(1444));

function solution(number: number): string {
    const ROMAN = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let result = ""
    for (let k in ROMAN) {
        result += k.repeat(Math.floor(number / ROMAN[k]));
        number = number % ROMAN[k];
    }

    return result
}

console.log(solution(900));