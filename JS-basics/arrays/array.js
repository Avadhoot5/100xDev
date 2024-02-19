// E1. Array from Range 


const arr = [];
function arrayFromRange(min, max) {
    for (let i = min; i <= max; i++)
        arr.push(i);
    return arr;
}

const output =  arrayFromRange(2,-4);
// console.log(output);

// E2. Includes

const numbers = [1, 2, 3, 5];

function includes(array, searchElement) {
    setFlag = false;
    for (let i of array)
        if (i === searchElement) setFlag = true;
    return setFlag;
}

// console.log(includes(numbers, 5));

// E3. Except 

const excNo = [1, 2, 3, 4,1 ,1,3];

function except(array, excluded) {
    // for (let i of excluded)
    //     array.splice(array.indexOf(i), 1);
    // return array;
    let newArr = [...new Set(array)];
    for (let i of excluded) {
        newArr.splice(newArr.indexOf(i), 1);
    }
    return newArr;
}

const excOp = except(excNo, [3]);
// console.log(excOp);

// E4. Moving an Element 

const moveNo = [1, 2, 3, 4];

function move(array, index, offset) {
    const newArr = [...array];
    const position = index + offset;
    if (position >= array.lenght || position < 0){
      console.error('Invalid offset');
      return;
    }
    const del = newArr.splice(index, 1)[0];
    newArr.splice(position, 0, del);
    return newArr;
}

// const moveResult = move(moveNo, 0, 1);
// console.log(moveResult);

// E5. Count occurences 

const occArr = [1,2,3,4,1,1,2];

function countOccurrences(array, searchElement){
    return array.reduce((accumulator, current) => {
        const count = (current === searchElement) ? 1 : 0;
        return count + accumulator;
    }, 0);
}

// const occRes = countOccurrences(occArr, 1);
// console.log(occRes);

// E6. Get Max 

const maxArr = [1, 4, 2, 3, 8];

function getMax(array) {
    if (array.lenght === 0)
        return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

// const resMax = getMax(maxArr);
// console.log(resMax);

// E7. Movies 

const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
];

// All the movies in 2k18 with rating > 4. Sort them by their rating
// Desc Order, pick their title only 


let filterMovie = movies.filter(m => m.year === 2018 && m.rating >=4)
                        .sort((a, b) => a.rating - b.rating).reverse()
                        .map(val => val.title);

console.log(filterMovie);


