// sum()

function sum(...values) {
    if (values.length === 1 && Array.isArray(values[0])){
        let newVal = [...values[0]];
        return newVal.reduce((a, b) => a + b);
    }
    else {
    let total = values.reduce((a,b) => a + b);
    return total;
}
}
// console.log(sum(3,1,52,52));
// console.log(sum([3,1,52,52]));


let circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius 
    }
};

circle.radius = 3;
// console.log(circle.area);

const occArr = [1,2,3,4,1,1,2];

function countOccurrences(array, searchElement){
    if (! Array.isArray(array))
        throw new Error('Please provide an array');
    return array.reduce((accumulator, current) => {
        const count = (current === searchElement) ? 1 : 0;
        return count + accumulator;
    }, 0);
}

try {
    const counting = countOccurrences(null, 1);
    console.log(counting);
}
catch (e) { // e acts as an identifier to the Error Object
    console.log(e.message);
}
