// FOR loop
for(let i = 0; i <= 10; i++){
   console.log(i)
  }
// make an array of the numbers from the previous loop
let array = [];
  for (i = 0; i <= 10; i++) {
      array.push(i);
  }
console.log(array);

// multiplication function
function myFunction(array,index) {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]*index)
       }  
}

//some examples of time tables
myFunction(array,9);
myFunction(array,5);
myFunction(array,2);

