function a() {
  var x = 'x';

  function b() {
    var y = 'y';
    return x + y;
  }
  return b();
}

console.log(a());
