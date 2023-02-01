// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if 
// the order of the parentheses is valid. The function should return true 
// if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true



function validParentheses(parens) {
    var indent = 0;

    for (var i = 0; i < parens.length && indent >= 0; i++) {
        indent += (parens[i] == '(') ? 1 : -1;
    }

    return (indent == 0);
}