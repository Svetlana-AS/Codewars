// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
//     First argument is an array of numbers and the second is the divisor.
//
// Example(Input1, Input2 --> Output)
//     [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divisibleBy(numbers, divisor) {
    let result = [];

    // Проходим по каждому числу в массиве
    for (let i = 0; i < numbers.length; i++) {
        // Проверяем, делится ли текущее число на делитель без остатка
        if (numbers[i] % divisor === 0) {
            // Если делится без остатка, добавляем число в результирующий массив
            result.push(numbers[i]);
        }
    }

    return result;
}

const divisibleBy = (numbers, divisor) => numbers.filter(v => !(v % divisor));

const numbers = [1, 2, 3, 4, 5, 6];
const divisor = 2;
console.log(divisibleBy(numbers, divisor));
// Вывод: [2, 4, 6]
// В этом решении мы используем цикл for, чтобы пройтись по каждому числу в исходном массиве.
//     Затем мы проверяем, делится ли текущее число на делитель без остатка, используя оператор остатка %.
// Если деление происходит без остатка, то число добавляется в результирующий массив.
//     В конце функция возвращает результирующий массив, содержащий все числа из исходного массива, которые делятся на делитель.






