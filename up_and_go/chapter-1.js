// input

// сообщение "Please tell me your age:" выводится во всплывающем окне
// где мы можем ввести значение к-е запишется в переменную age
// age = prompt( "Please tell me your age:" );
// console.log( age );

// typeof null //-> вернет "object" это старый баг js
// __________________________________________________________________

// object

let obj = {
  a: "hello world",
  b: 42
};


let c = "a";              // a

console.log(c);
console.log(obj[c]);			// "hello world"
console.log(obj["b"]);		// 42


// __________________________________________________________________

