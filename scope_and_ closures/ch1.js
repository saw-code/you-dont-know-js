
//   function foo(a) {
//     console.log( a + b );
//     b = a
//
//   }
//
// foo( 2 );

// eval
// function foo(str, a) {
//   eval( str ); // обман!
//   console.log( a, b );
// }
//
// var b = 2;
//
// foo( "var b = 3;", 1 ); // 1, 3

// use strict
// function foo(str) {
//   "use strict";
//   eval( str );
//   console.log( a ); // ReferenceError: a is not defined
// }
//
// foo( "var a = 2" );
//
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// // более "скучно" повторять "obj"
// obj.a = 2;
// obj.b = 3;
// obj.c = 4;
//
// // "легкое" сокращение
// with (obj) {
//   a = 3;
//   b = 4;
//   c = 5;
// }


function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a: 3
};

var o2 = {
  b: 3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a );

