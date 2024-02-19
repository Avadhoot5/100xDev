// E.1 
function Maximum(a, b){
    return a > b ? a : b
}
// let result = Maximum(1, 4);
// console.log(result);

// E.2 
function isLandscape(width, height) {
    return (width > height);
}
// let pic = isLandscape(224, 131);
// console.log(pic);

// E.3 - FizzBuzz 

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    else if (input > 0) {
        if (input%15 === 0)
            return 'fizzBuzz';
        else if (input%5 === 0)
            return 'Buzz';
        else if (input%3 === 0)
            return 'fizz';
        else if (input%15 !== 0)
            return input;
    }
}
// console.log(fizzBuzz(5))

// E.4 - Demerit Points 
// speed limit = 70 display ok 
// from 75 (5) -> 1 point
// Math.floor(1.3)
// > than 12 points -> suspended 


function checkSpeed(speed) {
    if (typeof(speed) === 'number'){
        const speedLimit = 70
        const kmPerPoint = 5
        const maxPoints = 12
        if (speed > 0 && speed < speedLimit + kmPerPoint) 
            return 'OK';
        const point = (speed - speedLimit)/kmPerPoint;
        if (point < maxPoints)
            return 'Point: ' + Math.floor(point);
        else if (point >= maxPoints) return 'License suspended';           
    }
}

// console.log(checkSpeed(120));

function showNumbers(limit) {
    for (let i=0; i<=limit; i++){
        if(i%2 === 0) console.log(i, "EVEN");
        else console.log(i, "ODD");
    }
}
// showNumbers(10);

function countTruthy(array) {
    let count = 0;
    for (let i of array) {
        if (i)
        count++;
    }
    return count;
}

let result = [1,4,42,0, null];
// console.log(countTruthy(result));

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

// console.log(movie);

// console.log(movie['title']);

// console.log(typeof(movie['title']) === 'string');

function showProperties(obj) {
    for (let val in obj) {
        if(typeof obj[val] === 'string')
            console.log(val, obj[val]);
    }
}

// showProperties(movie)

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++){
        if(i%3 === 0 || i%5 === 0)
            sum = sum + i;
    }
    return sum;
}

// console.log(sum(10));

// 1-59: F
// 60-69: D
// 70-79: C 
// 80-89: B 
// 90-100: A


const marks = [90, 25, 40];

function calculateGrade(marks) {
    let total = 0;
    for (let i of marks){
        total = total + i;
    }
    const avg = total/marks.length;
    return avg;
}

let average = calculateGrade(marks);
// console.log(average);

function eachRow(rows) {
    str = '';
    for (let j = 1; j < rows + 1; j++) {
        str = str + '*';
        console.log(str)
    }
}
// eachRow(2);

// Prime Number Exercise 

function checkPrime(number) {
    for (let factor = 2; factor < number; factor ++)
        if (number%factor === 0)
            return false;
    return true;
}

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (checkPrime(number)) console.log(number);
}

// showPrimes(20);

// Objects 

// (OOPs) Object-oriented programming 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

// circle.draw(); //Method 
// console.log(circle.location);
// console.log(circle.radius);

// Factory functions - Camel by Convention

// Camel Notation - oneTwoThreeFour
// Pascal Notation - OneTwoThreeFour

function createCircle(radius) {
    return {
        radius, // In modern JS, if the key and value are same we can add only the key radius, => radius: radius,
        draw() {
            console.log('draw');
        }
    }
}

let circle1 = createCircle(2);
// circle1.draw();
// console.log(circle1.radius);


// Constructor functions - Pascal by Convention

function Circle(radius) {   
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Functions are objects  

Circle.call({}, 2); // is equivalent to - const circlenew = new Circle(2)
Circle.apply({}, [2]); // similar to call function, but argument needs to be passed as an array

const circlenew = new Circle(2); //new operator - 1. creates an empty object, 2. sets 'this' to point to the object, 3. returns the object from the function.
// circlenew.draw();
// console.log(circlenew.radius);

const circleDynamic = {
    radius: 1
};

// circleDynamic = {}; const means, can't re-assign the variable to new obj

circleDynamic.color = 'yellow';
circleDynamic.draw = function() {}

delete circleDynamic.color;

// console.log(circleDynamic);

// Constructor Property 

// Every obj in JS has a constructor property,that references the func that was used to create that obj

// when we create a obj using the obj literal syntax, internally JS enginge uses this constructor function - ƒ Object() { [native code] }

let x = {};

// JS translates the above to the following
        // let x = new Object();


let n = {value: 10};

function increase(n){
    n.value++;
}

increase(n); //the obj is passed by it's reference
// console.log(n);

// Cloning an Object 

// Method 1
// const another = {};

// for (let key in circle) 
//     another[key] = circle[key];

// Method 2 - combines 1 or more obj, into single obj. (target, source) - target can be empty object, or existing object. Source - 1 or more.
// const another = Object.assign({}, circle);

// Method 3 

const another = { ...circle }; //copies the property of the object and places inside {}

// console.log(another);

// Template Literal 

// ${varname} - to add var to strings

const name = 'John';

const mailList = `
Hi ${name},

Thank you for the subscription.

Regards,
User`;

// console.log(mailList);

const now = new Date();
const date1 = new Date('June 15 2023 10:20');
const date2 = new Date(2023, 5, 16, 10);

now.setFullYear(2024);
 

