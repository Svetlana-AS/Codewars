// Oh no, Timmy's created an infinite loop! Help Timmy
//  find and fix the bug in his unfinished for loop!

// function createArray(number){
//     var newArray = [];

//     for(var counter = 1; counter <= number; counter++){
//       newArray.push(counter);
//     }

//     return newArray;
//   }

function createArray(number) {
    var newArray = [];

    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

createArray = number => Array.from({ length: number }, (_, index) => index + 1)