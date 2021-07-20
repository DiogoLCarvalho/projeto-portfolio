var styleContact = document.querySelectorAll('#contact__link');
var styleContactSpan = document.querySelectorAll('.contact__list li span');

styleContact[0].onmouseover = function () {
    effectContactON('#4C4C4C','0'); 
};
styleContact[0].onmouseout = function () {
    effectContactOFF('0'); 
};
styleContact[1].onmouseover = function () {
    effectContactON('#D5285E','1'); 
};
styleContact[1].onmouseout = function () {
    effectContactOFF('1'); 
};
styleContact[2].onmouseover = function () {
    effectContactON('#0079B9','2'); 
};
styleContact[2].onmouseout = function () {
    effectContactOFF('2'); 
};
styleContact[3].onmouseover = function () {
    effectContactON('#FD5956','3'); 
};
styleContact[3].onmouseout = function () {
    effectContactOFF('3'); 
};

function effectContactON(color,spanNumber) {
        styleContactSpan[spanNumber].classList.toggle("contact__span--JS");
        styleContactSpan[spanNumber].style.transition = '0.5s ease';
        styleContactSpan[spanNumber].style.backgroundColor = color; 
}
function effectContactOFF(spanNumber) {
    styleContactSpan[spanNumber].setAttribute('class', ' ');
    styleContactSpan[spanNumber].style.backgroundColor = '#ffffff'; 
}
