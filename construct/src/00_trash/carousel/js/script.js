const container = document.querySelector('.container');
const slide = document.querySelector('.slide');
const box = document.querySelectorAll('.box');

let width = box[0].offsetWidth + 30;
slide.style.minWidth = `${box.length * width}px`;

// let start;
// let change;


// /////////////////////////////////////////////////
// //////////////// Desktop Drag ///////////////////
// /////////////////////////////////////////////////

// container.addEventListener('dragstart', (e) => { 
//     start = e.clientX; 
// });

// container.addEventListener('dragover', (e) => { 
//     e.preventDefault();
//     let touch  = e.clientX;
//     change = start - touch; 
// });

// container.addEventListener('dragend', slideShow);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// /////////////////////////////////////////////////
// ///////////////// Mobile Drag ///////////////////
// /////////////////////////////////////////////////

// container.addEventListener('touchstart', (e) => { 
//     start = e.touches[0].clientX; 
// });

// container.addEventListener('touchmove', (e) => { 
//     e.preventDefault();
//     let touch  = e.touches[0].clientX;
//     change = start - touch; 
// });

// container.addEventListener('touchend', slideShow);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// function slideShow(){

//     console.log(change);
//     if (change >0){
//         container.scrollLeft += width;
//     }else{
//         container.scrollLeft -= width;
//     }
// }

const handleMouseDown = (e) => {
    console.log(e.target);
    console.log("mouseDown");
  };