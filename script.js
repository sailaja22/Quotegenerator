
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("refresh");

function colorflipper () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


const text=document.getElementById("quote");

const displayQuote = () =>{
  
    let index = Math.floor(Math.random()*data.length);
  
    let quote = data[index].text;
  
    text.innerHTML = quote; 
    
    fet
  
}

// const fetchQuote = () =>{
//     const result = fetch("https://type.fit/api/quotes")
//     .then(function(response) {
//         return response.json(); 
//     }) 
//     .then(function(data) {
//         return data; 
// });

// console.log(result);

// }

async function getText() {
    let x = await fetch("https://type.fit/api/quotes");
    let y = await x.json();
    console.log(y);
  }

function newQuote(){
    colorflipper ();
    getText();
}
