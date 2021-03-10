const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');

//========2-вызвали функ-цию
const cardsMarkup = createColorCardsMarkup(colors);
//========3-повесили эту строку в выбраное место
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

//=======2-ДЕЛЕГИРОВАНИЕ 
paletteContainer.addEventListener('click', onPaletteContainerClick);

//=========1-создали функцию, которая РЭНДЕРИТ разметку

function createColorCardsMarkup(colors) {
  return colors.map(({ hex, rgb }) => {
    return `
  <div class="color-card">
    <div
    class="color-swatch"
    data-hex="${hex}"
    data-rgb="${rgb}"
    style="background-color: ${hex}"
      ></div>
    <div class="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </div>
  `;
  }).join('');
};

// шаблон одного эл-та + массив объектов
// мэпнули + сделали карточку для каждого
// вернули целую строку
//------------------------------------


function onPaletteContainerClick(evt) {
  // проверка куда мы клацнули (можно только в свотч)
  const colorSwatchEl = evt.target.classList.contains('color-swatch');
  if (!colorSwatchEl) {
    return
  }
  //---------------------------

  // проверяем активные карточки
    // ищим текущий выбранный по классу
    // если нашли - удаляем класс
  removeActiveCardClass()
  //---------------------------

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  // затем добавляем отзывчивость карточек
  addClassToColorCard(parentColorCard)
 
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;  
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active')
  
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addClassToColorCard(card) {
    // затем + нужный class
  card.classList.add('is-active');
}




















// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//      <div><div><div> <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div></div></div></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }
