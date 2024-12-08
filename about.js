
toggle .addEventListener("click", function(){
    document.querySelectorAll('.card').forEach(card =>
        card.style.background=('rgb(255 255 255 / 10%)'));
});

toggle .addEventListener("click", function(){
    document.querySelectorAll('h2').forEach(titre =>
titre.classList.toggle("paragraphColor"))
});

toggle .addEventListener("click", function(){
    document.querySelectorAll('p').forEach(paragraphh =>
paragraphh.classList.toggle("paragraphColor"))
});



