function isPalindrome(word) {
  for(let i = 0; i< word.length; i++) {
    let n = i + 1
    if (word[i] !== word[word.length - n]){
      return false
    }
  }
  return true



}

/* 
  find length of string
  calculate center
  compare beginning and ends to make sure they are the same
  keep going in wards in the string until you get to the middle.
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
