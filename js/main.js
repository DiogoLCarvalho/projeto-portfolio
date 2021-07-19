var styleContact = document.querySelectorAll('#contact__link');

var styleContactSpan = document.querySelector('.contact__list li span');
console.log(styleContactSpan);

styleContact[0].onmouseover = function () {
    effectContactON('#4C4C4C'); 
};
styleContact[0].onmouseout = effectContactOFF; 

// TALVEZ COLOCAR UM PARAMETRO NO styleContactSpan[PARAMETRO]
function effectContactON(parametro) {
        styleContactSpan.classList.toggle("contact__span--JS");
        styleContactSpan.style.transition = '0.5s ease';
        styleContactSpan.style.backgroundColor = parametro; 
        console.log(styleContactSpan.getAttribute('class'));
}
function effectContactOFF() {
    styleContactSpan.setAttribute('class', ' ');
    console.log(styleContactSpan.getAttribute('class'));
    styleContactSpan.style.backgroundColor = '#ffffff'; 
}
