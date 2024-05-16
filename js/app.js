const colorList = document.querySelectorAll('.color-list__select');
const buttonAdd = document.getElementById('buys-add');
const input = document.querySelectorAll('input');
const sizeList = document.querySelectorAll('.size-list__select');
const buttonTraslateRigth = document.querySelector('.button-next__content'); // Boton para cambiar de producto
const main = document.querySelector('.main'); // Para agregar las dos clases de animacion para que el evento funcione
const template = document.getElementById('template');

const productTitle = document.querySelector('.product-title');
const productInfo = document.querySelector('.product-info__text');
const productPrice = document.querySelector('.buys-price');
const productImage = document.querySelector('.picture-image');

const cart = [];

const data = {};

function addCart() {
  data['nombre'] = productTitle.textContent;
  data['price'] = +productPrice.textContent; // El signo '+' convierte el string en number

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

let num = 0;

buttonTraslateRigth.addEventListener('click', () => {
  const copyTemplate = document.importNode(template.content, true);

  const collection = copyTemplate.children;

  const array = Array.from(collection);

  if (!main.classList.contains('traslate-left')) {
    main.classList.add('traslate-left');

    setTimeout(() => {
      productTitle.textContent = array[num].querySelector('.title').textContent;
      productInfo.textContent = array[num].querySelector('.info').textContent;
      productImage.src = array[num].querySelector('.image').src;
      productPrice.textContent = array[num].querySelector('.price').textContent;

      if (num < 1) {
        num++;
      } else {
        num = 0;
      }

      main.classList.remove('traslate-left');

      main.classList.add('traslate-right');
    }, 1000);

    main.classList.remove('traslate-right');
  }
});
