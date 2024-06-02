/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

//Answer//

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);