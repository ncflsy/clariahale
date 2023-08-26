document.getElementById("btn-menu").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.scrollIntoView({ behavior: "smooth" });
});

const navLine = document.querySelector("#nav-button");
var nav = document.querySelector('nav');

navLine.addEventListener('click', function(){
    navLine.classList.toggle('nav-active');
    nav.classList.toggle('hidden');
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('navbar-fixed'); 
        
    } else {
        header.classList.remove('navbar-fixed');
    }
});

