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





// let fn;
//
// function foo() {
//   let a = 2;
//
//   function baz() {
//     console.log( a );
//   }
//
//   fn = baz; // присваиваем `baz` глобальной переменной
// }
//
// function bar() {
//   fn(); // смотри мам, я видел замыкание!
// }
//
// foo();
//
// bar(); // 2



//
// for (var i=1; i<=5; i++) {
//   console.log( "XXX " + i );
//   setTimeout( function timer(){
//     console.log( i );
//   }, i*1000 );
// }

// for (var i=1; i<=5; i++) {
//   (function(){
//     var j = i
//     setTimeout( function timer(){
//       console.log( j );
//     }, i*1000 );
//   })();
// }



// function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];
//
//   function doSomething() {
//     console.log( something );
//   }
//
//   function doAnother() {
//     console.log( another.join( " ! " ) );
//   }
//
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   };
// }
//
// var foo = CoolModule();
//
// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3





var foo = (function CoolModule(id) {
  function change() {
    // modifying the public API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log( id );
  }

  function identify2() {
    console.log( id.toUpperCase() );
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
