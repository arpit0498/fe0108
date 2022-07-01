var age;
var yearOfBirth;
function calcAgeInYears() {
  alert('You are ' + age + ' years old');
}
function calcAgeInDays() {
  var ageInDays = age * 365;
  alert('You are ' + ageInDays + ' days old');
}
alert('Before going to know your market profit or loss , Lets know your age');
yearOfBirth = prompt('What year were you born?');
age = 2022 - yearOfBirth;
var choice = prompt(
  "Do you want to know your age in 'Years' or 'Days'?\nPress 1 for Years\nPress 2 for Days:"
);

// Iteration 3: Use the switch statement for calculate age in years or days

switch (choice) {
  case '1':
    calcAgeInYears(); //calls the calcAgeInYears() function
    break;
  case '2':
    calcAgeInDays(); //calls the calcAgeInDays() function
    break;
  default:
    alert('Not a valid option');
}

// Iteration 4: Use the ternary operator to find if the person is eligible to buy stocks or not
// NOTE: If age is greater than 18 ; he is eligible else not
let result =
  age >= 18
    ? 'You are eligible to buy stocks. Find your profit or loss'
    : 'You are not eligible to buy stocks. But still you can find a hypothetical gain or loss  ';
alert(result);
