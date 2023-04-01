/*
Number 3

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.
Create a Switch Statement that accepts the colors: Black, Violet, and Pink.
Lowercase and Uppercase letters must be accepted
*/

let color = prompt ("Enter a color");

function checkIfAccepted (color)
{
    switch (color)
    {
        case (color = "black"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "Black"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "BLACK"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "violet"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "Violet"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "VIOLET"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "pink"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "Pink"):
            alert ("Color is ACCEPTED");
            break;
        case (color = "PINK"):
            alert ("Color is ACCEPTED");
            break;
        default:
            alert ("Color is NOT ACCEPTED");
    }
}
checkIfAccepted (color);
