/**
 * Basic example of regular expressions in javascript.
 * This example shows evaluation functions.
 */

 // literal expression of 'hello'
 // each character is a literal character and will be taken at face value.
 let re = /hello/;

 // exec - Returns result in an array if there is a match, or null if there is no match.
 // gives you what matches, the index it started matching at, and the input string
 const result = re.exec('hello world');
 // this wil give null as there is no match.
 const result2 = re.exec('hilo');

 console.log(result);
 console.log(result2);

 // test - Returns true or false
 // true as hello matches.
 const testResult = re.test('hello');
 // can make it case insensitive
 re = /hello/i;
 const testResult2 = re.test('Hello');
 console.log(testResult);
 console.log(testResult2);

 // g makes the regular expression global
 re = /hello/g;

 // match - Returns result array or null
 const str = 'hello there';
 const matchResult = str.match(re);
 console.log(matchResult);

 // search - Returns the index of the first match. If not found, returns -1.
 const str2 = 'hello there';
 const searchResult = str2.search(re);
 console.log(searchResult);

 // replace - returns new string with some or all matches of a pattern
 const replaceStr = 'hello there';
 const newStr = str.replace(re, 'Hi');
 console.log(newStr);