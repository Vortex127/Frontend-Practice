// What will be the result for these expressions?

// code:
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true because strings are compared character by character so unicode values come into play.
undefined == null // true because both undefined and null represent absence of value.
undefined === null // false due to strict equality op.
null == "\n0\n" // false because null is only comparabale to undefined. If comparison would've been used then it would've been true since null would be converted to 0.
null === +"\n0\n" // false due to strict equality op.

