// Even or Odd - Четным или нечетным
// Create a function that takes an integer as an argument and returns "Even"
//  for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}
console.log(even_or_odd(12))
console.log(even_or_odd(5))

