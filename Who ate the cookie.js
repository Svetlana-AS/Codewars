// Create a function that accepts a string and a single character,
//     and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0


function cookie(x) {
    const type = typeof x

    if (type === 'string') {
        return "Who ate the last cookie? It was Zach!"
    } else if (type === 'number') {
        return "Who ate the last cookie? It was Monica!"
    } else {
        return "Who ate the last cookie? It was the dog!"
    }

}


function cookie(x) {
    const t = typeof x
    const who = t == "string" ? 'Zach' : t == "number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
}
