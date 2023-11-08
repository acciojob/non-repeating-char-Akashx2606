function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  // Iterate through the string to count characters
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
