//EXAMPLE NUMBER 1
let score = "33";
console.log(typeof score);
console.log(typeof (score));

let valueIdNumber = Number(score);
console.log(typeof valueIdNumber);

//EXAMPLE NUMBER 2
let score2 = "33abc";
console.log(typeof score2);

let valueIdNumber2 = Number(score2);
console.log(typeof valueIdNumber2);
console.log(valueIdNumber2);// not a number this cfreate a issue even it looks like a numerical value

//INVESTIGATION STUDY

/*
"33" => 33*{NUMBER}
"33abc" => NaN
true => 1 (true); 
false => 0 (true);
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//yes it worked it shoe answer "true".

//1 = > true
// 0 = > false
// "hitesh" => true (we can take is error)
// " " = > false

 //********************************OPERATIONS**************************/
 let value = 3;
 let negValue = -value;
 console.log(negValue);

 console.log(2*2);
 console.log(2+2);
 console.log(7-2);
 console.log(2**3);
 console.log(2%3);
 console.log(2/3);


 let str1 = "Hello";
 let str2 = " Madhav Sharma";
 let str3 = str1 + str2;
 console.log(str3);

 console.log(1 + "2");
 console.log("1" + 2);
 console.log("1" + 2 + 2);// if string appear first it take it as string for whole expression and result = "122".
 console.log(1+2+"2");// if number appers first so then this make this as numbner then seperate the string from the expressionand result="32".

 console.log(+true);
 console.log(+"");

 let num1, num2, num3
 num1 = num2 = num3 = 2+2

 let gameCounter = 100;
 gameCounter++;
 console.log(gameCounter);

