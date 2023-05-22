let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('bx-x');
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.texto-secao',{delay:200, origin: 'top'});
sr.reveal('.img-goblin',{delay:450, origin: 'top'});
sr.reveal('.icons',{delay:500, origin: 'left'});
sr.reveal('.scroll',{delay:500, origin: 'right'});