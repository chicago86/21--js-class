"use strict";

let text = document.querySelector('.ba-cool-title');
let hero = document.querySelector('.ba-hero');
let walk = 80;

function shadowMove(event){ 

let x = event.clientX;
let y = event.clientY;

let width = hero.offsetWidth;
let height = hero.offsetHeight;

let xWalk = (x / width) * walk - (walk / 2);
let yWalk = (x / height) * walk - (walk / 2);

xWalk = Math.round(xWalk);
yWalk = Math.round(yWalk);

let shadow = xWalk + 'px ' + yWalk + 'px 0 rgba(255,0,255,0.6),';

shadow += -xWalk + 'px ' + -yWalk + 'px 0 rgba(0,255,255,0.6),';

shadow += yWalk + 'px ' + xWalk + 'px 0 rgba(0,255,0,0.6),';

shadow += yWalk + 'px ' + -xWalk + 'px 0 rgba(255,255,0,0.6)';

text.style.textShadow = shadow;


}

hero.addEventListener('mousemove', shadowMove);


 
 