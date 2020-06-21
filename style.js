const mobile = document.querySelector('.mobile-icon');
const navLinks = document.querySelector('.nav-links');

mobile.addEventListener('click', ()=>{
    //console.log('clicked')
    if (navLinks.classList.contains('show-links')) {
        navLinks.classList.remove('show-links');
        mobile.style.backgroundImage = "url('./images/icon-hamburger.svg')"
    }else{
        navLinks.classList.add('show-links');
        mobile.style.backgroundImage = "url('./images/icon-close.svg')"
    }
});