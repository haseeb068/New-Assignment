// ASSignment 1


function createAdder(numToAdd) {
    return function(num) {
      return num + numToAdd;
    };
  }
  const addFive = createAdder(5);
  console.log(addFive(10)); 
  console.log(addFive(20)); 
  console.log(addFive(30));



// ASSignment 2


function searchArray(arr, value) {
    if (arr.length === 0) {
      return false; 
    } else if (arr[0] === value) {
      return true; 
    } else {
      return searchArray(arr.slice(1), value); 
    }
  }
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(searchArray(myArray, 7));   
console.log(searchArray(myArray, 10));  


// ASSignment 3


function addParagraph(text) {
  const newParagraph = document.createElement('p'); 
  const textNode = document.createTextNode(text); 
  newParagraph.appendChild(textNode); 
  document.body.appendChild(newParagraph); 
  
}
addParagraph("Hello, world!");



// ASSignment 4




function addListItem(text) {
    const list = document.querySelector("ul");
    const newListItem = document.createElement("li"); 
    const textNode = document.createTextNode(text); 
    newListItem.appendChild(textNode);
    list.appendChild(newListItem); 

}
addListItem("Item 4");


// Assignment 5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; 
  }
  const myElement = document.getElementById("my-element");
changeBackgroundColor(myElement, "red");



// assignment 6

function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject = { name: 'John', age: 30 };
saveObjectToLocalStorage('my-object', myObject);



// Assingment 7

function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key); 
    return JSON.parse(objectString); 
  }
  const mYObject = getObjectFromLocalStorage('my-object');
console.log(mYObject);


// assignment 8

function saveObjectToLocalStorage(object) {
    for (let prop in object) {
      localStorage.setItem(prop, JSON.stringify(object[prop]));
    }
    
    const retrievedObject = {};
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
    
   
    return retrievedObject;
  }
  const MyObject = {
    name: 'John',
    age: 30,
    location: 'New York'
  };
  
  const retrievedObject = saveObjectToLocalStorage(MyObject);
  console.log(retrievedObject);