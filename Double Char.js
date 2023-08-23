// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


/
function doubleChar(str) {
   let result = ''
    for (let i=0; i<str.length; i++){
        let sum = str[i]+str[i]
        result += sum;
    }
    return result;
}


function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
}