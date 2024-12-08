let btnNext = document.querySelector("#btnNext");
let formOne = document.querySelector("#formOne");
let formTwo = document.querySelector("#formTwo");

//console.log(formOne);

// btnNext.onclick = function(event){
// event.preventDefault()    
// formTwo.style.left ="0px"
// formOne.style.right ="400px"
// }; 

firstInput= document.querySelector("#fname");
lastInput= document.querySelector("#lname");

btnNext.onclick = function(event){
    firstName=false;
    lastName=false;

    if(firstInput.value ==="" && lastInput.value ===""){
        firstName,lastName=false
    } else{
        firstName,lastName=true
        formTwo.style.left ="0px";
        formOne.style.right ="400px"
    };
    
    event.preventDefault() 
}; 

let btnSubmit = document.querySelector(".btnSubmit");
let popup = document.querySelector(".popup");


//console.log(popup);

popup.style.display='none'

btnSubmit.onclick=function(event){ 
    event.preventDefault() 
    popup.style.display='flex'
};

close= document.querySelector(".close");
//console.log(close);
close.onclick=function(){
popup.style.display='none'
};

/*
Just 9a3det faza , lazem ki tenzel all boutton x,
u clear the form , or t3awed tarj3 lel form lowel
*/

let checkTerms=document.querySelector('.checkTerms');
let label=document.querySelector(".option")
let options = document.querySelector('#options')
console.log(options);
toggle .addEventListener("click", function(){
    document.querySelectorAll('h2').forEach(welcome =>
        welcome.classList.toggle('changeColor'));

    checkTerms.classList.toggle('changeColor'); 
    label.classList.toggle('changeColor') ;
    options.classList.toggle('changeColor');

});

let form= document.querySelector('form')
toggle .addEventListener("click", function(){

    if(mode=="white"){
    form.style.border="1px solid white"
    formTwo.style.border="1px solid white"
    mode="black"  
    }
        else {
        form.style.border="1px solid black"
        formTwo.style.border="1px solid black"
        mode="white"
    }
});


toggle .addEventListener("click", function(){
    document.querySelectorAll('input').forEach(input =>
        input.classList.toggle('changeBorder')) ;
});

toggle .addEventListener("click", function(){
    document.querySelectorAll('input').forEach(input =>
        input.classList.toggle('changeColor')) ;
});

toggle .addEventListener("click", function(){
    popup.classList.toggle('popBackground')
});

toggle .addEventListener("click", function(){
    popup.classList.toggle('bordure')
});




