/*!
 * Start Bootstrap - One Page Wonder v6.0.0 (https://startbootstrap.com/theme/one-page-wonder)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.closeButton');

var tl = gsap.timeline({
  defaults: { duration: 1.5, ease: "circ.outout.config(2)",  },
})

tl.paused(true)
tl.to('.overlay', { clipPath: 'circle(100%)' })
tl.to('.menu-container', { opacity: 1, y: '30px', duration:2}, "-=1");

gsap.to('.slideSec-1', {y:'-100vh', delay:0.5, ease: "expo.inOut", duration: 1.5});
gsap.to('.slideSec-2', {y:'-100vh', delay:0.7, ease: "expo.inOut", duration: 1.5});
gsap.to('.slideSec-3', {y:'-100vh', delay:0.9, ease: "expo.inOut", duration: 1.5});
gsap.to('.slideOver', {y:'-100vh', delay:1.7});
gsap.fromTo('.intoSec', 
   {y:'-100px', opacity:0, },
   {y:'0px', opacity:1, delay:1.7, ease: "circ.outout"}
   )

button.addEventListener('click', () => {
  tl.play();
})
closeButton.addEventListener('click', () => {
    tl.reverse(0.7);
  })

