/*
Number 4

Create a function that will accept a number, if the number given by the user is an odd number, display "odd number". If even number, display "even number".
Before logging an odd or even number, check the input of the user. If the user input is a string such as "one", "two", "or three", display unexpected input.
    Try these arguments
        5
        10
        "8"
        "20"
        "seven"
        "Fifteen"
        true
        null
        undefined
        NaN
*/

let userInputNum = prompt ("Enter a number")

function oddOrEven (num)
{
    if (isNaN(num) || typeof parseInt(num) !== "number")
    {
        return 'Unexpected Input';
    }
    else if (num == '')
    {
        return "Enter a number";
    }
    else
    {
        if (num % 2 == 0)
        {
            return ("even number");
        }
        else
        {
            return ("odd number");
        }
    }
}

console.log (oddOrEven(userInputNum));