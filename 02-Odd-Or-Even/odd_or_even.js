// odd or even reporter

// The solution using FOR
// write a for loop to iterate from 0 to 20
/*for(i = 0; i < 21; i++) {
  console.log(i);
}
  // check if the current is even or odd and report the result to the screen.
  for(i = 0; i < 21; i++) {
    if (i === 0) {
      console.log(i +  " is even");
}
    else if (i % 2 === 0) {
      console.log(i + " is even");   
}
    else {
      console.log(i + " is odd");
}
  }*/

// The solution using WHILE ( here I tried to improve my code)
/*let num = 0;
while(num <= 20){
 
  if (num % 2 === 0) {
    console.log(`the number ${num} is even`);   
}
  else {
    console.log(`the number ${num} is odd`);
}
num++;
}*/
// The solution using WHILE DO
let x = 0;
do {
  if (x % 2 === 0) {
    console.log(`the number ${x} is even`);   
}
  else {
    console.log(`the number ${x} is odd`);
}
  x++;
}
while (x <= 20);