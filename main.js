import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {modalBox} from './modules/modal.js'
import {controls} from './modules/controls.js'

let pin1 = document.querySelector('.pin')
let modal1 = document.querySelector('.box')
modalBox(pin1, modal1)

document.addEventListener('keydown', controls)

let cloud1 = document.querySelector(".cloud-1");
let cloud2 = document.querySelector(".cloud-2");

gsap.fromTo(cloud1, {x: "80vw"}, {x: "20vw", duration: 12, repeat: Infinity, yoyo: true, ease: "sine.out"});
gsap.fromTo(cloud2, {x: "40vw"}, {x: "80vw", duration: 10, repeat: Infinity, yoyo: true, ease: "sine.out"});


gsap.to(".cara",
  { scrollTrigger: {
    trigger: ".panel",
    start: "top",
    scrub: 0.1,
    pin: true,
    end: "+=4500",
  },
    x: "350vh",
  }
);

const tl = gsap.timeline({
	scrollTrigger: {
    trigger: ".sheeps",
    start:"end 0%",
    end:"bottom 50%",
    //onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'play play reverse reset',
	}
});

tl.fromTo(
  ".pin",  {y: -100, opacity: 0}, {y: 10, opacity: 1, duration: 1, ease: "bounce.out"}
);

let screens = gsap.utils.toArray(".panel");
let scene = document.querySelector(".scene");

let scrollTween = gsap.to(screens, {
  x: "-150vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".scene",
    pin: true,
    scrub: 0.1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: `+=${scene.offsetWidth}`
  }
});

gsap.set(".texta, .textb", { y: -500 });

gsap.to(".texta", {
  y: 30,
  duration: 2,
  ease: "linear",
  scrollTrigger: {
    trigger: ".texta",
    containerAnimation: scrollTween,
    start: "bottom bottom",
    toggleActions: "play play reverse reset",
  }
});

gsap.to(".textb", {
  y: 30,
  duration: 2,
  ease: "linear",
  scrollTrigger: {
    trigger: ".textb",
    containerAnimation: scrollTween,
    start: "bottom bottom",
    toggleActions: "play play reverse reset",
  }
});