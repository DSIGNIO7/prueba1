const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');

btnElement.onclick = function(){

  const yourName = prompt("Please Enter Your Name:");
  spanElement.textContent = yourName;
}


// ----  Proyect 2  Bombillo Power - Off  ----

//const switchBtn = document.querySelector(".switch");
//const body = document.body;

//switchBtn.addEventListener("click",()=>{
  //  body.classList.toggle("on");
//});