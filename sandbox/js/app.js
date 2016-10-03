// Part 4

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// e.g:
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']


var stooges = [
   {name: 'moe', age: 40, hairStyle: "bowl cut" },
   {name: 'larry', age: 50, hairStyle: "balding"},
   {name: 'curly', age: 60, hairStyle: "buzzed"}
]


//input: array of objects
var pluck = function(stooges, propStr){

   var arrayCopy = []

   for (var i = 0; i < stooges.length; i++) {
      //console.log(stooges[i]);

      var itemObject = stooges[i]
      var valueForName = itemObject[propStr]
      arrayCopy.push(valueForName)

      //console.log(arrayCopy);

   }
   return arrayCopy
}

console.assert( pluck(stooges, 'name')[0] === 'moe' )
console.assert( pluck(stooges, 'hairStyle')[2] === "buzzed" )
console.assert( pluck(stooges, 'age')[2] === 60 )
