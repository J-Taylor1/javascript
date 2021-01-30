// ***For all the exercises, be sure to log the output of the function to the console.***

/************************************************************************************/
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function tekCamp() { }
for (let i = 1; i < 101; i++) {
    if ((i % 15) == 0) {
        console.log(`TEKcamp`);
    } else if ((i % 3) == 0) {
        console.log(`TEK`);
    } else if ((i % 5) == 0) {
        console.log(`camp`)
    } else {
        console.log(i);
    }
};
console.log(tekCamp);

/************************************************************************************/
//Write a function that converts the current temperature from Fahrenheit to Celsius. 

//your code...
function farenheitCelsius(f) {
    const celsius = ((f - 32) * 5) / 9;
    console.log(celsius);
};
console.log(farenheitCelsius());




/************************************************************************************/
//Write a function that converts the Celsius temperature back to Fahrenheit. 

//your code...
function celsiusFarenheit(c) {
    const fareheit = ((9 / 5) * c) + 32;
    console.log(faren)
}
console.log(celsiusFarenheit());



/************************************************************************************/
// Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

//your code...
function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(canVote());






/************************************************************************************/
// Write a function that converts a string to an array. It should return an array.  

//your code...
let str;
function strToArr(str) {
    let arr = str.split("");
    return arr;
}

console.log(strToArr("Hello there everybody"));





/************************************************************************************/
// Write a function that reverses your telephone number.  It should return the reversed telephone number.

//your code...
function reversePhone(number) {
        return (
            number
              .toString()
              .split('')
              .reverse()
              .join('')
          )
}
console.log(reversePhone());




/************************************************************************************/
// Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

//your code...
var car = {
    make: "Kia",
    model : "Optima",
    year       : 2009,
    color : "Burgandy",
    carObj :function() {
      return this.make + " " + this.model + " is a year " + this.year + " and a color of " + this.color;
    }
  };

car.carObj();



/************************************************************************************/
// Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

//example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

//your code...

function oddOrEven(myarray) {
    let evenOdd = {}
    for (let i = 0; i < myarray.length; i++) {
        if (myarray[i]%2 === 0) {
            evenOdd[myarray[i]] ='even';
        } else {
            evenOdd[myarray[i]] = 'odd';
        }
    }
    return evenOdd;
}
console.log(oddOrEven([10,23,3,4]));




/************************************************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

//your code...
for (i = 0; i < numbers.length; i+=3) {
    console.log(numbers[i]);
}



/************************************************************************************/
const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { program: 'TEKcamp' }];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
foodArray[6] = 'school';
console.log(foodArray[6]);
const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
// Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".



for (i=0; i < foodArray.length; i++) {
    var endS = foodArray[i];
    
    if (endS.charAt(endS.length-1).includes('s')) {
        console.log(foodArray[i] + ' is ' + adjectiveArray[i]);
    } else {
        console.log(foodArray[i] + ' are ' + adjectiveArray[i]);
    }
}
  

/************************************************************* */
// Refactor the for() loop to be a while loop.


for (let i = 0; i < 10; i++) {
    // console.log(" the value of i in the loop is : " + i);
}


//your code...
let i=0;
while ( i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}



/************************************************************* */
//Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
let sumVal = sum (30, 2)
 function sum(a,b) {
     return  a + b;
    
}

console.log(sumVal);
let multiVal = multiply20(sumVal);

function multiply20 (x) {
    return sumVal * 20;
}

console.log(multiVal);
let productVal = product10(multiVal);

function product10 (x) {
    return multiVal / 10;
}

console.log(productVal); 
let exponVal = expon2(productVal);

function expon2(x) {
    return productVal ** 2;
};

console.log(exponVal);


/************************************************************* */
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

// ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

// 20 
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

function truthyFalsy(x){
    if (Boolean(x) == true) {
        console.log(x + ' Because it is true');
    } else {
        console.log(x + ' Because it is false');
    }
    };

console.log(truthyFalsy());

/************************************************************* */
// Refactor the following code using a switch statement:

const day = "friday";

if (day === "monday") {
    console.log("we got a long week ahead of us...");
} else if (day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}


switch(day = "friday") {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It'a weekend!");
}


/************************************************************* */
// Refactor the following statements to use ternary expressions:

const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}
let workingAge = (age > 21) ? "adult" : "minor"; 
console.log(workingAge);

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};
workingAge = (age > 13 && age < 19) ? "teen" : "not a teen"; 

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
workingAge = (age > 65) ? "retired" : "still working..."; 



/************************************************************* */
//Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-healthy ? (yes or no)
-hobbies
-profession
-education

-add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
*/

//your code...

var identify = {
    name: "Jerboa Taylor",
    age  : 25,
    gender: "Male",
    healthy: "yes",
    hobbies: ["watching anime","hanging with family", "playing the game"],
    profession: "bootcamp student",
    education: "Associates",
    learn : function() {
      return this.name + " is learning Javascript";
    },
    bio : function() {
    return "I like " + this.hobbies;
    }
  };

console.log(identify.learn());
/************************************************************* */

{
    const year = 2021;
    const nums = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    const doubled = [];

    //Refactor the following statements into expressions


    // 1.
    if (year > 2000 && year < 2100) {
        console.log("welcome to the 21st century");
    }
    let century21 = (year > 2000 && year < 2100) ? "welcome to the 21st century" : "Not in the 21st century"; 
    console.log(century21);
    // 2.
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);

    function sumTot(total, num) {
        return total + num
    }
    console.log(nums.reduce(sumTot));
    // 3.
    while (i < nums.length) {
        doubled.push(nums[i] * 2);
        i++;
    }
    console.log(doubled);

    let doubleEd = nums.map(x => x * 2);
    console.log(doubleEd);

/************************************************************* */
// Use array methods to solve the following problems.

const nums2 = [1, 2, 3, 4, 5];
// Square every number in the array.  Store the squares in a new array.
let sqrNums= [];
//your code...
for (i=0; i < nums2.length ; i++) {
     sqrNums[i] = Math.pow(nums2[i],2);
}




const fivePlus = [1, 3, 5, 7, 9, 1, 3, 5, 2, 3, 1, 23, 4, 232, 3, 4, 1, 2, 2, 2, 3, 4, 4, 1, 12, 11, 23, 3, 4, 5];
//Remove all numbers that are less than 5.  Store the results in a new array.

//your code...

let less5 = fivePlus.filter(myFunc);

function myFunc(value) {
	return value > 5;
}

console.log(less5)



// Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

//your code...

let randomArr = [];

for (let i = 0; i < 21; i++) {
    randomArr[i] = Math.floor(Math.random() * 101);
}

var sumMed = randomArr.reduce(function(a,b){
    return a + b;
},0);

console.log(sumMed);



const showNums = [12, 22, 33, 44, 55, 66, 77, 88, 99, 101];
//Print out the value of each number divided by 2.  There is no need to store the output in an array.
showNums.forEach(element => console.log(element/2));



/************************************************************* */
/* Chess pieces have point values associated with them.  

Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

Write a function that calculates the total point value of any given input list of Chess pieces.  
ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

If there are invalid chess pieces, discard those elements.
ex : ['iPhone','queen','pawn'] => chessCalc() => 10
['android'] => chessCalc() => null

*/

let pieces = ['Pawn','Rook','Bishop','Knight','Queen','King'];
    function chessCalc(pieces) {
        let value = 0;
        for (let i = 0; i < pieces.length; i++) {
                 if (pieces[i] == 'Pawn'){
                  value+=1;
              } else if (pieces[i] == 'Rook'){
                  value+=5;
              } else if (pieces[i] == 'Bishop') {
                value+=3;
              } else if (pieces[i] == 'Knight') {
                  value+=3;
              } else if (pieces[i] == 'Queen') {
                  value+=9;  
              } else {
                  value+=0;
              }
              
            }
            if (value == 0){
                return null;
            } else {
        return value;
            }
      }
              
      console.log(chessCalc(pieces));



/************************************************************* */

const ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
//reverse the array, without modifying / `mutating` the ones array.
const reverseOnes = [...ones].reverse();

console.log(reverseOnes);
/************************************************************* */
//create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

function cb(name) {
    console.log('hello this is ' + name + ' callbackfunction');
}

function performer(cb) {
    //code goes here
    cb("Jt's");
}

performer(cb);

/************************************************************* */
// For the given list of developers : 
const devs = [
    {
        name: 'Cameron',
        age: 23,
        gender: 'm',
        "tech_stack": ['html', 'css', 'js', 'React']
    },
    {
        name: 'Liz',
        age: 20,
        gender: 'f',
        "tech_stack": ['java', 'spring-boot', 'MySql']
    },
    {
        name: 'Chris',
        age: 102,
        gender: 'm',
        "tech_stack": ['react', 'express', 'python']
    },
    {
        name: 'Rashid',
        age: 27,
        gender: 'm',
        "tech_stack": ['thymeleaf', 'postgres', 'js', 'Angular']
    },
    {
        name: 'Annie',
        age: 30,
        gender: 'F',
        "tech_stack": ['html', 'scss', 'less', 'DynamoDB', 'GraphQL']
    },
    {
        name: 'Dr. Patel',
        age: 52,
        gender: 'M',
        "tech_stack": null
    },
    {
        name: 'Isaiah',
        age: 48,
        gender: 'M',
        "tech_stack": ['Java', '', 'less', 'DynamoDB', 'GraphQL']
    },
    {
        name: 'Saima',
        age: 33,
        gender: 'F',
        "tech_stack": ['MongoDB', 'Route53', 'Jenkins', 'Terraform', 'Kubernetes']
    },
    {
        name: 'Omar',
        age: 33,
        gender: 'm',
        "tech_stack": ['c++']
    },
    {
        name: 'Mariam',
        age: 32,
        gender: 'f',
        "tech_stack": null
    },
];

/************************** */
// Find all devs older than 24

//your code here...
let devs24Up = [];

for (let i=0; i < devs.length; i++) {
  if (devs[i].age > 24) {
	devs24Up.push(devs[i]);
  }
}
console.log(devs24Up);

/************************** */
// Remove all people who are not developers (i.e. no tech stack)

//your code here...
let devsNull = [];

for (let i=0; i < devs.length; i++) {
  if (devs[i].tech_stack !== null) {
	devsNull.push(devs[i]);
  }
}
console.log(devsNull);



/************************** */
// Calculate the total age of all the devs

//your code here...
let total = 0;
for (let i = 0; i < devs.length; i++) {
	 total+=devs[i].age;  
}
console.log(total);



/************************** */
// Find all female devs

//your code here...
let devsGender = [];

for (let i=0; i < devs.length; i++) {
  if (devs[i].gender !== 'm' && devs[i].gender !== "M") {
	devsGender.push(devs[i]);
  }
}
console.log(devsGender);





/************************** */
// lowercase the genders of every dev

//your code here...

let devsGender = [];
for (let i=0; i < devs.length; i++) {
	devsGender.push(devs[i].gender.toLowerCase());

}
console.log(devsGender);

/************************** */
// Sort the developers by name

//your code here

let sortName = devs.sort((a,b)=> a.name - b.name ? 1:-1);

console.log(sortName);
/************************** */
// Sort the devs by age in descending order

//your code here

let lowAge = devs.sort((a,b) => b.age - a.age);
console.log(lowAge);


/************************** */
// Sort the male coders by age

//your code here
let maleSortAge = devs.filter(({gender}) => gender == 'm' || gennder == 'M').sort((a.b) => b.age - a.age);
console.log(maleSortAge);

/************************** */
// For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

/*
Liz specializes in Java, Spring Boot, and MySql.
Chris specializes in React, Express, and Python.
Dr. Patel is not a developer.
*/

//your code here
let sentence = dev.name;
devs.forEach( dev => {
    if (dev['tech_stack']) {
        sentence += ' specializes in ' + dev['tech_stack'].join(', ') + '.'    
    } else sentence += ' is not developer.'
    console.log(sentence);
});


/************************************************************* */
// Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbersMixed = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: "val" }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

// filters out non numerical.m
function numOnly(val) {
    if (typeof(val) === 'number'){
      return val;
    }
  }
  
const filtered = numbersMixed.filter(numOnly);
  
  console.log(filtered);

 

//your code...
function maxNumber(x) {
    return Math.max(...x);
}

console.log(maxNumber(filtered));

//After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

function sortNums(numbers, desc = false) {
    //your code...
};



/************************************************************* */
//Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


//your code...



/************************************************************* */
//Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({ company: "TEKsystems" }, "object");

console.log(mapObj.has({ company: "TEKsystems" }));

//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

//your code...


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

// ex : 2,3 => doMath(2,3) => adding : 5
const operations = [];
function doMath(x, y) { };

//your code...
const fn = function (y) {
    return y*3
}
const mutiple = function (x) {
console.log(fn(x));
}
mutiple(3);

/************************************************************* */
//- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...



//- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

//your code
var message = " is how much the stock has increased";
function stockGain(basis, growth){
    console.log(basis * growth);
    return basis * growth;
}

    function growth(yrs) {
        return 1.05**yrs;
    }
console.log(stockGain(500,growthI(5))-500 + message);
// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

var futureValue = stockGain(500,growthI(5));
console.log(futureValue);
// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



