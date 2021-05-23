/**
 A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

 In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

 For example an extract of a stocklist could be:

 L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
 or
 L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
 You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

 M = {"A", "B", "C", "W"}
 or
 M = ["A", "B", "C", "W"] or ...
 and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

 For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

 (A : 20) - (B : 114) - (C : 50) - (W : 0)
 where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

 If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

 Note:
 In the result codes and their values are in the same order as in M.
 */

// const listOfArt = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
// const listOfCat = ["A", "B", "C", "D"];

const listOfArt = ["F 150", "F 515", "F 250", "F 890", "F 600"];
const listOfCat = ["B", "R", "D", "X"];

class G964 {

    static stockList = (listOfArt, listOfCat) => {
        const list = {};
        let listString = '';

        listOfCat.forEach(cat => {
           list[cat] = listOfArt.reduce((acc, current) => {
               if (current.charAt(0) === cat) {
                   return acc + +current.split(' ')[1];
               }

               return acc;
           }, 0);
        });

        Object.keys(list).forEach((listKey, idx) => {
            listString += (idx+1 === Object.keys(list).length) ? `(${listKey} : ${list[listKey]})` : `(${listKey} : ${list[listKey]}) - `;
        });

        const noValues = Object.keys(list)
            .map(key => list[key])
            .reduce((acc:number,current:number) => acc + current,0);
        if (!noValues) {
            return '';
        }

        return listString;
    }
}

console.log(G964.stockList(listOfArt,listOfCat));
