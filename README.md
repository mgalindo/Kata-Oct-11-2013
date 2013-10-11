Kata-Oct-11-2013
================

Task:
Write a JavaScript function in Node.js that finds the middle 3 digits (inclusive) of an integer that is passed into the function.
Your function should be written so that it can be consumed by another Node module using “require” and the path to your file.
It is expected that your code throws appropriate errors.
Treat this work as an open source project.
Within 2 hours publish your completed work to your Github account with an MIT license.


Test:
  node  js\testmiddle3.js

Test output:
Error getting the 3 middle digits [Error: aaa is not an integer]
Error getting the 3 middle digits [Error: 123.25 is not an integer]
Error getting the 3 middle digits [Error: 12 is not long enough]
Error getting the 3 middle digits [Error: 123 is not long enough]
Error getting the 3 middle digits [Error: 1234 is not long enough]
For 12345 the middle 3 digits are: 234
For 123456 the middle 3 digits are: 345
For 1234567 the middle 3 digits are: 345
For 12345678 the middle 3 digits are: 456
For 123456789 the middle 3 digits are: 456
For 1234567891 the middle 3 digits are: 567