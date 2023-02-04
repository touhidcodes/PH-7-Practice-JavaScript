// 25. show the output "ajke amar mon valo nei" for 39 times?
/* for (let i = 1; i <= 39; i++) {
	console.log("ajke amar mon valo nei", i);
} */

// 26. How does while loop works?
// let int = 0; // initial value
// while (int <= 39) {
// 	// condition
// 	console.log("ajke amar mon valo nei", int);
// 	int++; // increment
// }

// 27. How does for loop works?
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
 */

// 28. Is there any problem if do not change while loop variable?
/* 
yes, if you not change loop variable/ increment, this while loop can run infinite times.
*/

// 29 . Write down a code and show the output from 58 to 98?
/* for (let i = 58; i < 99; i++) {
	console.log(i);
} */

// 30. Write down a code and show the output even numbers from 412 to 456?
/* for (let i = 412; i <= 456; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
} */

// 31. Write down a code and show the output odd numbers from 581 to 623?
/* for (let i = 581; i <= 623; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
} */
// 32. Deference between while and for loop?
/* 
A for loop runs for the number of iterations set in the initial conditions (the for statement).
A while loop runs while some condition set in the initial while statement is still true.
*/

// 33. Make an string array and show output the elements by for loop?
/* const array = [
	"var",
	"let",
	"const",
	"conditionals",
	"loop",
	"array",
	"object",
	"function",
];

for (let i = 0; i < array.length; i++) {
	const element = array[i];
	console.log(element);
} */
// 34. Make an string array and show output the elements by while loop?
/* const array = [
	"var",
	"let",
	"const",
	"conditionals",
	"loop",
	"array",
	"object",
	"function",
];

let i = 0;
while (i < array.length) {
	const element = array[i];
	console.log(element);
	i++;
} */

// 35. Make a for loop from 30 to 86, when goes to 44 it will brake the operation?
/* for (let i = 30; i < 87; i++) {
	if (i === 44) {
		break;
	}
	console.log(i);
} */

// 36. Make a array of books price, when the price above 200 tk skip those books and output rest of the books?
/* const price = [120, 230, 190, 80, 40, 199, 350, 400, 170, 130, 220];

for (let i = 0; i < price.length; i++) {
	const element = price[i];
	if (element === 200) {
		continue;
	}
	console.log(element);
}
 */
