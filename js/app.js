const colorList = document.querySelectorAll('.color-list__select');
const buttonAdd = document.getElementById('buys-add');
const input = document.querySelectorAll('input');
const sizeList = document.querySelectorAll('.size-list__select');
const buttonTraslateRigth = document.querySelector('.button-next__content'); // boton para cambiar de porducto
const main = document.querySelector('.main'); //Para agregar las dos clases para que el evento funcione
const template = document.getElementById('template');
const productTitle = document.querySelector('.product-title');
const productInfo = document.querySelector('.product-info__text');

const cart = [];

const data = {};

function addCart() {
  const newData = { ...data };

  cart.push(newData);

  input.forEach((item) => (item.checked = false));

  console.log(cart);
}

function extraerDatosColor(e) {
  sizeList.forEach((size) => {
    size.value !== e ? (data['color'] = e) : console.log('No es distinto');
  });
}
function extraerDatosSize(e) {
  colorList.forEach((color) => {
    color.value !== e ? (data['size'] = e) : console.log('No es distinto');
  });
}

buttonAdd.addEventListener('click', addCart);

colorList.forEach((itemColor) => {
  itemColor.addEventListener('click', (e) => extraerDatosColor(e.target.value));
});

sizeList.forEach((itemSize) => {
  itemSize.addEventListener('click', (e) => extraerDatosSize(e.target.value));
});

buttonTraslateRigth.addEventListener('click', () => {
  const copyTemplate = document.importNode(template.content, true);
  const adidasTitle = copyTemplate.querySelector('.adidas-title').textContent;
  const adidasInfo = copyTemplate.querySelector('.adidas-info').textContent;
  if (!main.classList.contains('traslate-left')) {
    main.classList.add('traslate-left');
    setTimeout(() => {
      productTitle.textContent = adidasTitle;
      productInfo.textContent = adidasInfo;
      main.classList.remove('traslate-left');
      main.classList.add('traslate-right');
    }, 1000);
    main.classList.remove('traslate-right');
  }
});
