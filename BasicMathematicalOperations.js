// v
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{

    switch (operation){
        case '+':
            return value1+value2;
        case '-' :
            return value1-value2;
        case '*':
            return value1*value2;
        case '/':
            return value1/value2;
    }

}

function basicOp(operation, value1, value2)
{
    return eval(value1 + operation + value2);
}

