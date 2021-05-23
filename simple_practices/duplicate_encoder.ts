/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 */

function duplicateEncode(word: string): string{
    return word.split('').map(str => {
        const firstChar = word.toLowerCase().indexOf(str.toLowerCase());
        const lastChar = word.toLowerCase().lastIndexOf(str.toLowerCase());

        if (firstChar === lastChar) {
            return '(';
        }

        return ')';
    }).join('');
}

console.log(duplicateEncode('Success'));