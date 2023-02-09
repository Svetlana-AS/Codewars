// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:




function multiTable(n) {
    let res = '';
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${n} = ${i * n}${i < 10 ? '\n' : ''}`;

    }
    return res;
}