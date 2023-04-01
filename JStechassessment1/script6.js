/*
Number 6

Prompt a user to enter a number.
When a number is less than 50, we need to display the message that we need to terminate the loop.
When a number is divisible by 10, display a message that it is divisible by 10. Therefore, they will skip the number.
If it is divisible by 5, display the number.
*/

let inputNum = prompt ("Give a number")
function checkNum (num)
{
    if (num < 50)
    {
        console.log (`Currently at ${number}. Terminating the loop`);
    }
    else if (num % 10 == 0)
    {
        console.log ("The number is divisible by 10. Skipping the number");
    }
    else
    {
        if(num % 5 == 0)
        {
            return num;
        }
    }
}

console.log (checkNum(inputNum));
