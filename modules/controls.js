
export function controls(e) {
  let scrollAmount = 0;
    e.preventDefault()
    e = e || window.event;

     if (e.keyCode == '37') {
       // left arrow
       scrollAmount = -1
    }

    else if (e.keyCode == '39') {
       // right arrow
       scrollAmount = 1
    }

    document.addEventListener('keyup', e => {
      scrollAmount = 0;
     });


    setInterval (function() {
      window.scrollBy({ top: scrollAmount});
    },10)
}

