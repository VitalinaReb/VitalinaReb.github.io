const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const close = document.querySelector('#closemenu');

burger.addEventListener('click' , () =>{
    menu.classList.toggle('disp');
});

closemenu.addEventListener('click' , () => {
    menu.classList.toggle('disp');
});