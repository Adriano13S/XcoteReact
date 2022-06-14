let main_timer = '';
let second_timer = '';
const startInterval = (element) => {
  const len = element.querySelectorAll('.liveDataMatch').length; // number of element to slide
  
  if (len > 1) {
    main_timer = setTimeout(()=> {
        const style = getComputedStyle(element.firstChild); // get css of first child
        const elementWidth = parseFloat(style.width) * (100 / document.documentElement.clientWidth); // get first child width
        element.firstChild.style.marginLeft = `-${elementWidth}vw`; // add negative margin to slide the element to left
        second_timer = setTimeout(() => {
          element.appendChild(element.firstChild); // take the first child and add it as last child
          element.lastChild.style.marginLeft = ''; // reset margin left
        }, 900); // time out necessary to see the transition
        startInterval(element);
    }, 12000)
  }
};

export const stopInterval = ()=>{
  clearTimeout(second_timer)
  clearTimeout(main_timer)
};


export default startInterval;