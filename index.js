// находим кнопки следуший, предыдуший
const buttons = document.querySelectorAll("[data-button-carousel]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // если кнопка prev то,  direction = -1, если next, то 1;
//     const direction = button.dataset.buttonCarousel === 'next' ? 1 : -1;
//     // closest ищем на уровне выше div с аттрибутом data-carousel,
//     //  а потом в нем находим ul с атрибутом data-slides
//     const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
//     //ищем активный li в ul
//     const activeSlide = slides.querySelector('[data-active]');
//     //находим индекс нового активного слайда в зависимости от того какую кнопку нажали
//     let newAciveSlide = [...slides.children].indexOf(activeSlide) + 0;
   
//     if (newAciveSlide < 0) {
//         newAciveSlide = slides.children.length - 1;
//     };
//     if (newAciveSlide == slides.children.length) {
//         newAciveSlide = 0;
//     };

//     delete activeSlide.dataset.active;
//     slides.children[newAciveSlide].dataset.active = true;
//   });
// });



// function startCarousel() {
//     const slides = document.querySelector('[data-slides]');
//     const activeSlide = slides.querySelector('[data-active]');
//     let newAciveSlide = [...slides.children].indexOf(activeSlide) + 1;
//     if (newAciveSlide < 0) newAciveSlide = slides.children.length - 1;
//     if (newAciveSlide >= slides.children.length) newAciveSlide = 0;

//     slides.children[newAciveSlide].dataset.active = true;
//     delete activeSlide.dataset.active;
// }

// setInterval(() => {
//     startCarousel()
// }, 1000);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // если кнопка prev то,  direction = -1, если next, то 1;
      const direction = button.dataset.buttonCarousel === 'next' ? 1 : -1;
      // closest ищем на уровне выше div с аттрибутом data-carousel,
      //  а потом в нем находим ul с атрибутом data-slides
      const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
      //ищем активный li в ul
      const activeSlide = slides.querySelector('[data-active]');
      let newAciveSlide;
     
      if (button.dataset.buttonCarousel === 'prev'){
          // нулевой элемент будет после четвертого
          slides.children[slides.children.length -1].insertAdjacentElement('afterend',slides.children[0]);
          newAciveSlide = 2;
        }
        if (button.dataset.buttonCarousel === 'next'){
            slides.children[0].insertAdjacentElement('beforebegin',slides.children[slides.children.length -1]);
             newAciveSlide = 2;
        }
        console.log(newAciveSlide);
        delete activeSlide.dataset.active;
        slides.children[newAciveSlide].dataset.active = true;
    });
  });