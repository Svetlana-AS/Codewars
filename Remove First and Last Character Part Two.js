// This is a spin off of my first kata.
//
//     You are given a string containing a sequence of character sequences separated by commas.
//
//     Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//
//     If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
//
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
//
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array (str) {
    // проверяем, что входная строка не пуста и содержит запятые
    if (str && str.includes(',')) {
        // разбиваем строку на массив символьных последовательностей
        const arr = str.split(',');
        // проверяем, что массив содержит более двух элементов
        if (arr.length > 2) {
            // удаляем первый и последний элементы из массива
            arr.shift();
            arr.pop();
            // объединяем оставшиеся элементы массива в строку, разделенную пробелами
            return arr.join(' ');
        }
    }
    // если входная строка пуста или удаление первого и последнего элементов приведет к пустой строке, возвращаем null
    return null;
}

