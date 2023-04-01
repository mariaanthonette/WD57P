/*
Number 1

Assign a variable for first name, last name, age, and hobbies using the proper naming convention.
Create a constant variable for a city, house number, state, and street.
Create a function for User Information, Hobbies, and Relationship Status.
*/

console.log("Hello World!");

let 
firstName = "John",
lastName = "Smith",
age = 30,
isMarried = true,
hobbies = ['Biking', 'Mountain Climbing','Swimming'];

const city = "Lincoln";
const houseNum = 32;
const state = "Nebraska";
const street = "Washington";

function userDetails()
{

}

function userInfo ()
{
 console.log (`First Name: ${firstName}`);
 console.log (`Last Name: ${lastName}`);
 console.log (`Age: ${age}`);
 console.log (`Hobbies: ${hobbies}`);
 console.log ("Work Address");
 console.log (`city`)
}
console.log (userInfo());

console.log (`${firstName} ${lastName} is ${age} years of age`);

function hisHobbies (hob1, hob2, hob3)
{
    console.log (`His hobbies are: ${hob1}, ${hob2}, ${hob3}`);
}

console.log (hisHobbies("eating","sleeping","bingewatching"));



function relStat (isMarried)
{
    console.log ("The value of isMarried is:");
    return isMarried;
}

console.log (relStat(isMarried));