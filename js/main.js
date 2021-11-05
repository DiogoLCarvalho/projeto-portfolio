// Header
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header__nav');
    if (window.scrollY > 500) {
        header.style.backgroundColor = '#2979DA';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

var navMobile = document.querySelector('.nav__Mobile');
var listMobile = document.querySelector('.nav__list');


navMobile.onclick = function () {
    navMobile.classList.toggle("imgfechar");
    listMobile.classList.toggle("nav__ativo");
}

var navMobileLink = document.querySelectorAll('.nav__list li a');
var contactBtn = document.querySelector('.nav__contact');

function hideBar(){
    listMobile.setAttribute('class', 'nav__list');
    navMobile.classList.toggle("imgfechar");
}

navMobileLink[0].onclick =  hideBar;
navMobileLink[1].onclick =  hideBar;
navMobileLink[2].onclick =  hideBar;
navMobileLink[3].onclick =  hideBar;

contactBtn.onclick = function () {
    if (listMobile.getAttribute('class')==='nav__list nav__ativo') {
        hideBar()
    }
} 


// Contact
var styleContact = document.querySelectorAll('#contact__link');
var styleContactSpan = document.querySelectorAll('.contact__list li span');

styleContact[0].onmouseover = function () {
    effectContactON('#4C4C4C', '0');
};
styleContact[0].onmouseout = function () {
    effectContactOFF('0');
};
styleContact[1].onmouseover = function () {
    effectContactON('#D5285E', '1');
};
styleContact[1].onmouseout = function () {
    effectContactOFF('1');
};
styleContact[2].onmouseover = function () {
    effectContactON('#0079B9', '2');
};
styleContact[2].onmouseout = function () {
    effectContactOFF('2');
};
styleContact[3].onmouseover = function () {
    effectContactON('#FD5956', '3');
};
styleContact[3].onmouseout = function () {
    effectContactOFF('3');
};

function effectContactON(color, spanNumber) {
    styleContactSpan[spanNumber].classList.toggle("contact__span--JS");
    styleContactSpan[spanNumber].style.transition = '0.5s ease';
    styleContactSpan[spanNumber].style.backgroundColor = color;
}
function effectContactOFF(spanNumber) {
    styleContactSpan[spanNumber].setAttribute('class', ' ');
    styleContactSpan[spanNumber].style.backgroundColor = '#ffffff';
}

// Footer
var thisYear = document.querySelector('.footer__text span');
var data = new Date();
var ano = data.getFullYear();
thisYear.innerHTML = `© ${ano}`;