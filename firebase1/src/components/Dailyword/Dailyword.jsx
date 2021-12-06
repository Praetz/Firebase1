
import './Dailyword';


const name = document.querySelector(".name");
const btn = document.querySelector("button");


btn.addEventListener("click", changeColor);

function changeColor () {
    name.style.color = "blue";
}



export default changeColor();