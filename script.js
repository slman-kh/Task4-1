
var numbers = [];
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(randomNumber);
}
//The Random Number:
console.log("The Random Number:");
console.log(numbers);

var sumEven = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
    }
}

//sum even
console.log("sum_ Of_Even_Numbers: " + sumEven);

// <5
var sum5 = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
        sum5 += numbers[i];
    }
}

// sum
console.log("The_sum_of_numbers_whose_index_is_less _than_5:   " + sum5);



var user = {
    name: "Salman Khaddour",
    phoneNumber: "+9399999999",
    age: 19,
    email: "slmankh170@gmail.com"
};
console.log("object :");
console.log(user);

document.write("<h2>OBJECT:</h2>");
document.write("<p>Name: " + user.name + "</p>");
document.write("<p> PhoneNumber : " + user.phoneNumber + "</p>");
document.write("<p>Age : " + user.age + "</p>");
document.write("<p>Email : " + user.email + "</p>");


console.log("<h2>OBJECT:</h2>");
console.log("<p>Name: " + user.name + "</p>");
console.log("<p> PhoneNumber : " + user.phoneNumber + "</p>");
console.log("<p>Age : " + user.age + "</p>");
console.log("<p>Email : " + user.email + "</p>");