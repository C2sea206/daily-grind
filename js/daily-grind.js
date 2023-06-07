/*

    Here are the items we believe we need to produce for each day's coffee

    pic - image src
    alt - the alt tag for the image
    color - color to match image
    desc - description of coffee
    name - name of the coffee
    day - the day of the week

*/

function coffeeTemplate(coffee) {
  return `
  <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>

  `;
}

let myDate = new Date();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//today = 3;

if (urlParams.has("day")) {
  //from querystring
  today = urlParams.get("day");
}

today = parseInt(today);

switch (today) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Pumpkin Spice Latte",
      color: "orange",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "A picture of a pumpkin spice latte coffee!",
      day: "Sunday",
      desc: `A picture of a pumpkin spice latte coffee, with extra pumkin spice! Making it very nice!!`,
    };
    break;

  case 1:
    today = "Monday";
    coffee = {
      name: "Bubble Tea",
      color: "pink",
      pic: "images/bubble-tea.jpg",
      alt: "A picture of a bubble tea",
      day: "Monday",
      desc: `I like me some bubble tea!`,
    };

    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: "Drip",
      color: "black",
      pic: "images/drip.jpg",
      alt: "A picture of a drip coffee",
      day: "Tuesday",
      desc: `I like me some strong drip!`,
    };
    // today = "Tuesday";
    break;

  case 3:
    today = "Wednesday";
    coffee = {
      name: "Mocha",
      color: "brown",
      pic: "images/mocha.jpg",
      alt: "A picture of a mocha coffee",
      day: "Wednesday",
      desc: `Love me some mocha coffee first thing in the morning!`,
    };
    break;

  case 4:
    today = "Thursday";
    coffee = {
      name: "Cold-Brew",
      color: "blue",
      pic: "images/cold-brew.jpg",
      alt: "A picture of a cold-brew coffee",
      day: "Thursday",
      desc: `Love me some cold-brew coffee when its hot outside!`,
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: "Frappaccino",
      color: "grey",
      pic: "images/frappaccino.jpg",
      alt: "A picture of a frappaccino coffee",
      day: "Friday",
      desc: `A nice refreshing ice cold blended frappaccino!`,
    };
    break;

  case 6:
    today = "Saturday";
    coffee = {
      name: "Caramel Latte",
      color: "purple",
      pic: "images/caramel-latte.jpg",
      alt: "A picture of a caramel-latte coffee",
      day: "Saturday",
      desc: `Love me some Caramel-Latte coffee first thing in the morning, with extra foam!`,
    };
    break;

  default:
    today = "Not sure what day it is!";
    alert("falling into alert!");
}

//alert(coffeeTemplate(coffee));

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//alert(today);
console.log(coffee);
