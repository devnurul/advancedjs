 const numbers = [2, 3, 4, 5, 6, 7, 8];

//  using for loop
 const output = [];

 for (let i = 0; i <numbers.length; i++) {
     const element =numbers[i];

     const result = element*element;

     output.push(result)
     
 }
 console.log(output);

//function

function square (element){
    return element*element;
}

// map filter


 const result =numbers.map(function(element){
    return element* element
});
console.log(result);


// with arrow function and map filter
//  const square = element => element*element;

 const result = numbers.map(x => x*x);
 console.log(result);


//  using filter

 const bigger = numbers.filter(x => x < 5);
 console.log(bigger);

// find

 const finder = numbers.find(x => x > 5);

 console.log(finder);
