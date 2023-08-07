// function foo() {
//   var a = 2;
//
//   function bar() {
//     console.log( a ); // 2
//   }
//
//   bar();
// }
//
// foo();

// function foo() {
//   let a = 2;
//
//   function bar() {
//     console.log( a );
//   }
//
//   return bar;
// }
//
// let baz = foo();
//
// baz(); // 2 -- Ого, замыкание только что было раскрыто, мужики!




// function foo() {
//   let a = 2;
//
//   function baz() {
//     console.log( a ); // 2
//   }
//
//   bar( baz );
// }
//
// function bar(fn) {
//   fn(); // смотри мам, я видел замыкание!
// }
//
// foo()





let fn;

function foo() {
  let a = 2;

  function baz() {
    console.log( a );
  }

  fn = baz; // присваиваем `baz` глобальной переменной
}

function bar() {
  fn(); // смотри мам, я видел замыкание!
}

foo();

bar(); // 2

https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/ch5.md#:~:text=%D0%A2%D0%B5%D0%BF%D0%B5%D1%80%D1%8C%20%D1%8F-,%D0%B2%D0%B8%D0%B6%D1%83,-%D0%A0%D0%B0%D0%BD%D0%B5%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8