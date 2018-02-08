// Require the colorer function
const colorer = require('./colorer')

// This is a print function that logs the arguments in colors
/* Strings: yellow,
   Numbers, NaN: cyan,
   undefined: red background, white text,
   Arrays: red,
   Objects: green,
   Functions: purple,
*/
function collog () {
  if (arguments.length === 0) {
    console.log('Nothing to print...')
  }

  // Convert our arguments aray like obj to array
  var args = Array.prototype.slice.call(arguments)

  // Call this function for each arguments supplied
  args.forEach(elem => {
    // log elem in different colors based on the type of the data
    colorer(elem)
  })
}

// Sample data for testing
var o = {
  a: 1,
  b: 2,
  // JSON.stringify() rewrites 'undefined' to 'null'
  c: ['a', 'b', undefined]
}

var s = 'sample text'
var x
var y = null

// NaN is printed in cyan because typeof NaN is actually a 'number'
var z = NaN
var n = 123

var a = [1, 2, 3, function () { var foo = 1 }, { a: 2 }]

var f = function () {
  console.log('Foo')
}

collog(true, false, x, y, z, o, s, n, f, a, a[4])
collog(
  (function () { })()
)
collog(`Text: ${s}, function: ${f}`)
console.log(f)
console.log(f.toString())
collog()
