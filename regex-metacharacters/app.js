/**
 * Example of Regex and the different metacharacters.
 */

 let re;
 // literal characters
 re = /hello/;
 // and i makes it case insensitive.
 re = /hello/i;

 // Metacharacters
 re = /^h/i; // Must start with a h.
 re = /d$/i; // Must end with a d
 re = /^hello$/i // Must begin with and end with
 re = /^h.llo$/i // matches any ONE character.
 re = /h*llo/i // Matches any character 0 or more times.
 re = /gre?a?y/i // Optional characters. e is optional, a is optional.
 re = /gre?a?y\?/i // Escape Character

 // Brackets [] - Character Sets
 re = /gr[ae]y/i // What ever is inside brackets, that character must be one of those. Must be an a or e
 re = /[GF]ray/ // Must be a 'G' or 'F'
 re = /[^GF]ray/ // Will match ANYTHING except G or F. Pretty much opposite of the above.
 re = /[A-Z]ray/ // Will match any upper case letter.
 re = /[a-z]ray/ // Will match any lower case letter.
 re = /[A-Za-z]ray/ // Will match any letter of any case.
 re = /[0-9]ray/ // Will match any digit.

 // Braces {} - Quantifiers
 re = /Hel{2}o/i; // Must occur exactly {n} amount of times.
 re = /Hel{2,4}o/i; // Must occur between {n-m} amount of times.
 re = /Hel{2,}o/i; // Must occur AT LEAST {n} amount of times.

// Parenthesis () - Grouping
re = /([0-9]x){3}/ // looks for a number and x 3 times and a row. Like: 3x3x3x.


// Shorthand Character Classes
re = /\w/; // World Character - Alphanumeric. Any letter, any number, or underscore.
re = /\w+/; // + = one ore more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // one or more digits.
re = /\D/; // Non-digits
re = /\s/; // match whitespace characters
re = /\S/; // match non-whitespace characters
re = /Hell\b/i; // World Boundary looks for the actual word.

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if it is NOT followed by y.

 const str = 'xy';


 // Lot the results of the test
 const result = re.exec(str);
 console.log(result);

 regexTest(re, str);

 /**
  * Runs a test if the inputStr matches the regex.
  * @param {any} regex the regex pattern to use
  * @param {string} inputStr the input string to test.
  */
 function regexTest(regex, inputStr) {
     if(regex.test(inputStr)){
         console.log(`${inputStr} matched ${regex.source}`)
     }
     else{
         console.log(`${inputStr} does not match ${regex.source}`)
     }
 }
