// E1 address object

const address = {
    street: '1234-Road',
    city: 'London',
    zipCode: 413214
};

function showAddress(address) {
    for (let i in address){
        console.log(i, ': ', address[i]);
    }
}
// showAddress(address);

// E2. factory and constructor function 
// factory method 

function factShowAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let storeVar = factShowAddress(('adfa'), 'bagfad', 152);

// constructor method 

function ConstShowAddress(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode;
}

let constVar = new ConstShowAddress(('adfa'), 'bagfad', 152);

// E3 Object equality 

let address1 = new ConstShowAddress('a', 'b', 'c');
let address2 = new ConstShowAddress('a', 'b', 'c');

function areEqual(address1, address2){
    // return ((Object.getOwnPropertyNames(address1)) === (Object.getOwnPropertyNames(address2)))
    // need to check if 2 objs are equal - both properties of obj must be equal
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2;
}

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// E4. blog post object 

// let blogPost = {
//     title: 'Ben 10',
//     body: 'This is a blog post',
//     author: 'Avadhoot',
//     views: 29,
//     comments: [
//         {author: 'Test author', body: 'This is body of the comment'},
//         {author: 'Test author', body: 'This is body of the comment'}
//     ],
//     isLive: true
// };

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let user = new Post('helo', 'this is test body', 'admin');
// console.log(user);

// 3 price range - an array of price range obj

let priceRanges = [
    {label: '&', tooltip:'sasta', minPerPerson: 0, maxperPerson: 10},
    {label: '&&', tooltip:'aukat', minPerPerson: 10, maxperPerson: 20}
];

