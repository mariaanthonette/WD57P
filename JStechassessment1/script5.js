/*
Number 5
Create a loop where it will count from 20 to 0.
Display the number in the console if it is an even number.

STRETCH GOALS
    Create a prompt that will let the user enter values from 0 to 20.
    Create a loop where it will count from 20 to 0.
    Display the number in the console if it is an even number.
    Enclosed your code inside a function.
*/

let enterNum = prompt ("Enter a number from 0 to 20")

function isEven (num)
{
    for (i = 0; i <= 20; i--)
    {
        console.log (`${i}`);
    }
    if (num % 2 == 0)
        {
            return num;
        }
}

console.log (isEven(enterNum));

