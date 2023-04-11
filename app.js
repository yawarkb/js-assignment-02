// 1.A function that creates a closure and returns a function that can add a specific number to any number passed to it:

// function addNumberToNumberFactory(numToAdd) {
//     // This is the closure that captures the `numToAdd` parameter
//     return function(num) {
//       // This is the returned function that adds `numToAdd` to `num`
//       return num + numToAdd;
//     }
//   }
  
//   const add5ToNumber = addNumberToNumberFactory(5);

//   console.log(add5ToNumber(10)); // Output: 15
//   console.log(add5ToNumber(20)); // Output: 25
//   console.log(add5ToNumber(30)); // Output: 35
    

// ******************************************


// 2.here's an example of a recursive function that searches an array for a specific value:
 
// function searchArray(array, value) {
//     // Check if the array is empty
//     if (array.length === 0) {
//       return false;
//     }
    
//     // Check if the first element is the value we're searching for
//     if (array[0] === value) {
//       return true;
//     }
    
//     // Call the function recursively with the rest of the array
//     return searchArray(array.slice(1), value);
//   }
//   const myArray = [1, 2, 3, 4, 5];

//   console.log(searchArray(myArray, 3)); // Output: true
//   console.log(searchArray(myArray, 6)); // Output: false
    

// ******************************************

// 3.Here's an example function that adds a new paragraph element to the bottom of an HTML document:

// function addParagraph(text) {
//     // create a new paragraph element
//     const newParagraph = document.createElement("p");
//     // set the text content of the new paragraph
//     newParagraph.textContent = text;
//     // get the body element of the HTML document
//     const body = document.querySelector("body");
//     // append the new paragraph to the body
//     body.appendChild(newParagraph);
//   }
 
// ******************************************

// 4.Here's a simple JavaScript function that adds a new list item to an unordered list in an HTML document:

// function addListItem(text) {
//     // create a new list item element
//     const newListItem = document.createElement("li");
//     // set the text content of the new list item
//     newListItem.textContent = text;
//     // get the unordered list element from the HTML document
//     const list = document.querySelector("ul");
//     // append the new list item to the unordered list
//     list.appendChild(newListItem);
//   }
  
//****************************************


//5. Here's an example of a function that changes the background color of an HTML element:

// function changeBackgroundColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }
// // Get a reference to the HTML element
// const myElement = document.getElementById('myElement');

// // Call the function to change the background color to red
// changeBackgroundColor(myElement, 'red');
  

// ******************************************

// 6.Here's an example function that saves an object to localStorage:

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = { name: 'John', age: 30 };
//   saveObjectToLocalStorage('myKey', myObject);
// const storedObject = JSON.parse(localStorage.getItem('myKey'));
    
// ******************************************

// 7.Here's an example of a function in JavaScript that retrieves an object from localStorage using the key provided as an argument:

// function retrieveObjectFromLocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return JSON.parse(item);
//   }
  
// ******************************************

// 8.Here's an example of a function in JavaScript that saves each property of an object to localStorage using the property name as the key and the property value as the value, and retrieves the object from localStorage and returns it as a new object:

// function saveObjectToLocalStorage(object) {
//     // Save each property to localStorage
//     for (const key in object) {
//       if (Object.hasOwnProperty.call(object, key)) {
//         const value = object[key];
//         localStorage.setItem(key, JSON.stringify(value));
//       }
//     }
    
//     // Retrieve the object from localStorage and return it as a new object
//     const retrievedObject = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = JSON.parse(localStorage.getItem(key));
//       retrievedObject[key] = value;
//     }
//     return retrievedObject;
//   }
  

// ******************************************