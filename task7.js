let book1 ={
    "title":"Hello World",
    "author":" Rishi Raj",
    "year":"1947",
    getbooktitleandyear:function(){
        return `${this.title} and ${this.year}`
    }
};
let book2 ={
    "title":"Hello USA",
    "author":" Utaksh Raj",
    "year":"2047",
    getbooktitleandyear:function(){
        return `${this.title} and ${this.year}`
    }
};
let book3 ={
    "title":"Hello India",
    "author":" Aman Raj",
    "year":"1847",
    getbooktitleandyear:function(){
        return `${this.title} and ${this.year}`
    }
};
console.log(book1);
console.log(book1.title, book1.author);

const func1 = (book)=>{
    return `Book title is: ${book.title} and the author is ${book.author}`
}
console.log(func1(book1));

const func2 = (year)=>{
    book1.year = year;
}
func2("1969");
console.log(book1);

let lib1 = {
    "name": "MGCL",
    "books": [book1,book2,book3]
}

console.log(lib1);
console.log(lib1.name, lib1.books.map(book=>book.title));

lib1.books.forEach(book => {
    console.log(book.title);
});
console.log(book1.getbooktitleandyear());
console.log(book2.getbooktitleandyear());
console.log(book3.getbooktitleandyear());

for(let prop in book1){
    if(book1.hasOwnProperty(prop)){
        console.log(`${prop}: ${book1[prop]}`);
    }
}

Object.keys(book1).forEach(key =>{
    console.log(`${key} : ${book1[key]}`);
});


// OUTPUT
// {
//     title: 'Hello World',
//     author: ' Rishi Raj',
//     year: '1947',
//     getbooktitleandyear: [Function: getbooktitleandyear]
//   }
//   Hello World  Rishi Raj
//   Book title is: Hello World and the author is  Rishi Raj
//   {
//     title: 'Hello World',
//     author: ' Rishi Raj',
//     year: '1969',
//     getbooktitleandyear: [Function: getbooktitleandyear]
//   }
//   {
//     name: 'MGCL',
//     books: [
//       {
//         title: 'Hello World',
//         author: ' Rishi Raj',
//         year: '1969',
//         getbooktitleandyear: [Function: getbooktitleandyear]
//       },
//       {
//         title: 'Hello USA',
//         author: ' Utaksh Raj',
//         year: '2047',
//         getbooktitleandyear: [Function: getbooktitleandyear]
//       },
//       {
//         title: 'Hello India',
//         author: ' Aman Raj',
//         year: '1847',
//         getbooktitleandyear: [Function: getbooktitleandyear]
//       }
//     ]
//   }
//   MGCL [ 'Hello World', 'Hello USA', 'Hello India' ]
//   Hello World
//   Hello USA
//   Hello India
//   Hello World and 1969
//   Hello USA and 2047
//   Hello India and 1847
//   title: Hello World
//   author:  Rishi Raj
//   year: 1969
//   getbooktitleandyear: function(){
//           return `${this.title} and ${this.year}`
//       }
//   title : Hello World
//   author :  Rishi Raj
//   year : 1969
//   getbooktitleandyear : function(){
//           return `${this.title} and ${this.year}`
//       }