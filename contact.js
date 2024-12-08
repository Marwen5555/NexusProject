let titre = document.querySelector('h2')
let request = document.querySelector('#request')
console.log(request);

toggle .addEventListener("click", function(){
    titre.classList.toggle('random')
    request.classList.toggle('random')
});