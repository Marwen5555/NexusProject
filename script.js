let toggle = document.querySelector (".toggle-checkbox");
let links = document.querySelector('a');
let body= document.body;
let mode = "white";


toggle .addEventListener("click", function(){
    body.classList.toggle("dark-mode");
});

//adding a white color for the h2 , for the landing section

toggle .addEventListener("click", function(){
  let whiteColor=document.querySelector("h2");
  whiteColor.classList.toggle("whiteColor");
});


//changing the color of the main title in the dark mode
let mainTitle = document.querySelector(".mainTitle")
toggle .addEventListener("click", function(){
  document.querySelectorAll('.mainTitle').forEach(mainTitle =>
    mainTitle.classList.toggle ('whiteColor'));
});


toggle .addEventListener("click", function(){
  document.querySelectorAll('.mainTitle').forEach(mainTitle =>
    mainTitle.classList.toggle ('bordercomponent'));
});

//adding a blacky color to the box of testimonails 
toggle .addEventListener("click", function(){
    document.querySelectorAll('.box').forEach(box =>
        box.style.backgroundColor = 'rgb(255 255 255 / 10%)');
});

// trainings js code
let cards = document.querySelectorAll('.card');
//console.log(cards);
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

// adding a white color for the burger menu
let Burger = document.querySelector('#burger')
toggle .addEventListener("click", function(){
  Burger.classList.toggle('whiteColor')
});

toggle .addEventListener("click", function(){
  document.querySelectorAll('.Name').forEach(Name =>
    Name.classList.toggle ('whiteColor'));
});


// drop Menu in the mobile screen 
let burger=document.querySelector("#burger");
let burgerList=document.querySelector("#burgerList");
let btnCloseMenu=document.querySelector(".btnCloseMenu");
burger.addEventListener("click", function(){
  burgerList.classList.toggle('showMenu');
  body.classList.toggle('classlistBody')
});



let Header= document.querySelector("header .container")
toggle .addEventListener("click", function(){
Header.classList.toggle('importantt')
});

toggle .addEventListener("click", function(){
  document.querySelectorAll('p').forEach(paragraphhh =>
paragraphhh.classList.toggle("whiteColor"))
});


//  let header = document.querySelector('header');
//  console.log(header);
//  header.addEventListener('scroll',() =>{
//    if (window.scrollY >0){
//      header.classList.add('scrolled');
//    } 
//    else {
//      header.classList.remove('scrolled');
//    }
//    // non fonctionnel !
//  });


































