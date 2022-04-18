const rolldice = document.getElementById('testerbutton');
const select = document.getElementById('selectbutton');
const select2 = document.getElementById('selectbutton2');
var roll;
var roll2;
var goal = 101;
var score = 0;
var percent;
document.getElementById('goal').innerHTML = goal;

document.getElementById('score').innerHTML = 0;

var clicked = false;

var rolled = false;

rolldice.addEventListener("click", () => {
  if(!rolled){
    roll = Math.floor(Math.random() * 6) + 1;
    roll2 = Math.floor(Math.random() * 6) + 1;
  	document.getElementById('roll').innerHTML = roll + ", " + roll2;
    clicked = false;
    rolled = true;
  }
});

select.addEventListener("click", () => {
  if(!clicked){
    score += roll;
    document.getElementById('score').innerHTML = score;
    clicked = true;
    rolled = false;
  }
});
select2.addEventListener("click", () => {
  if(!clicked){
    score += roll2;
    document.getElementById('score').innerHTML = score;
    clicked = true;
    rolled = false;
  }
});

