
/// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor*
// (which is, almost, what this is) should take a name input, and the dog should receive the
// assigned name.


//input string
var speak = function (strwd) {
   for (var i = 0; i < strwd.length; i++) {
   var singleWord = strwd[i]
   //console.log(singleWord);
   var wordArray = singleWord.split('')
   wordArray[0] = wordArray[0] = "r"

}

var dogTalkStr =  wordArray.join('')

console.log(dogTalkStr);
return dogTalkStr
   }

var generateDog = function (str) {
   var dog = {
      name : str,
      legs : 4,
      speak: speak,
   }
   //console.log(dog);
   return dog
}



//output object

var dog = generateDog('rex')

//getting app.js:26 Uncaught SyntaxError: Unexpected end of input on the assert values

console.assert(dog.legs === 4)
console.assert(dog.name === 'rex')

var dog = generateDog('carl')
console.assert(dog.name === 'carl')


// Give the dog a method called .speak(). speak() should receive a string as input and
// return a new version of that string where the first letter of every word is replaced
// with the letter 'r'.


console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.speak('so hungry') === 'ro rungry')
