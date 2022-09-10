import { gsap } from "gsap";
let tl = gsap.timeline();

export function modalBox(element, modal) {

  function showBox() {
    modal.classList.toggle("show");
    tl.fromTo(modal, {y: -100, opacity: 0}, {y: 10, opacity: 1, duration: .5, ease: "linear.out"})
  }

  element.addEventListener('click', showBox)

  document.querySelector('.close').addEventListener('click', function() {
    tl.fromTo(modal, {y: 0, opacity: 1}, {y: -100, opacity: 0, duration: .4, ease: "linear.out", onComplete: showBox})

  })
}
