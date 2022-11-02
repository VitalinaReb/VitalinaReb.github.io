"use strict"

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const close = document.querySelector('#closemenu');
const item = document.querySelector('#itemmenu');


burger.addEventListener('click' , () =>{
    menu.classList.toggle('disp');
});

closemenu.addEventListener('click' , () => {
    menu.classList.toggle('disp');
});

item.addEventListener('click' , () => {
    menu.classList.toggle('disp');
});
