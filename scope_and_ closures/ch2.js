function foo(a) {

  var b = a * 2;

  function bar(c) {
    console.log( a, b, c );
  }

  bar(b * 3);
}

foo( 2 ); // 2 4 12

https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/ch2.md#:~:text=%D0%9E%D0%B1%D0%BC%D0%B0%D0%BD%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%20%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-,%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8,-%D0%95%D1%81%D0%BB%D0%B8%20%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C