// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }
//
//   var b;
//
//   b = a + doSomethingElse( a * 2 );
//
//   console.log( (b * 3) );
// }

// doSomething( 2 ); // 15
 // 15
//
// function foo() {
//   function bar(a) {
//     i = 3; // меняем `i` в окружающей области видимости цикла for-loop
//     console.log( a + i );
//   }
//
//   for (var i=0; i<10; i++) {
//     bar( i * 2 ); // упс, впереди бесконечный цикл!
//   }
// }
//
// foo();

// for (var i=0; i<10; i++) {
//   console.log( i );
// }
//
// {
//   console.log( bar ); // ReferenceError!
//   let bar = 2;
// }


// {
//   let j;
//   for (j=0; j<10; j++) {
//     let i = j; // перепривязка в каждой итерации!
//     console.log( i );
//   }
// }


