/*Here are the items we believe we need to produce for each days coffee

  pic - image src 
  alt- the alt tag for the image
  color - color to match image
  desc- description of coffee
  name- name of the coffee
  day - the day of the week

*/
{
let myDate = new Date();

let today = myDate.getDay();

switch(today){

	case 2:
    	today = "Tuesday";
	break;
    	default:
  	today = "Not Sure what day it is!";
}

coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea!`
}



//alert(today);
console.log(today);