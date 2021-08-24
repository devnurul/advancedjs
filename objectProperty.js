 const students =[ 
     {id:21, name: "Sadman"},
     {id:25, name: "Ayman"},
     {id:65, name: "Noor"},
     {id:69, name: "Noor islam"},
    ]

// make it with for loop

     const name = [];
    for (let i = 0; i < students.length; i++) {
        const element = students[i];
         const names = element.name;
         name.push(names)
 
    }
    console.log(name);

    // make it with map and arrow function
     const name = students.map(s => s.name);
     console.log(name);

      // make it with filter and arrow function

       const bigger = students.filter(x => x.id > 50);

       console.log(bigger);


    // make it with find and arrow function
       const biggerF = students.find(x => x.id > 50);

       console.log(biggerF);
