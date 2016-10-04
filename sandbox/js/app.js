// Part 6

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.


var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}

console.log(object);

var reverseObject = function(object){
   for (var i = 0; i > object.length; i--) {
      console.log(object[i])
   }
}

var reversed = reverseObject(object)
console.assert( reversed['2b'] === 'apartment_no' )
