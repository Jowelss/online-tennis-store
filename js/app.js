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
const themeButton = document.querySelector('.header-nav__theme-icon');

const cart = [];

const data = {};

function addCart() {
  data['nombre'] = productTitle.textContent;
  data['price'] = productPrice.textContent;

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
  input.forEach((item) => (item.checked = false));

  const copyTemplate = document.importNode(template.content, true);

  const collection = copyTemplate.children;

  const array = Array.from(collection);

  if (!main.classList.contains('traslate-left')) {
    main.classList.add('traslate-left');

    setTimeout(() => {
      productTitle.textContent = array[num].querySelector('.title').textContent;
      productInfo.textContent = array[num].querySelector('.info').textContent;
      productImage.src = array[num].querySelector('.image').src;
      productPrice.textContent = `$${
        array[num].querySelector('.price').textContent // Agregué el signo de dolar al precio
      }`;

      if (num < 1) {
        num++;
      } else {
        num = 0;
      }

      main.classList.remove('traslate-left');

      main.classList.add('traslate-right');
    }, 800); // 0.8 segundos

    main.classList.remove('traslate-right');
  }
});

themeButton.addEventListener('click', () => {
  const body = document.body;
  const colorTextBody = document.querySelectorAll('*');
  const shadowInfo = document.querySelector('.product-info__content');
  const iconBlack = document.querySelector('.black');
  const iconLight = document.querySelector('.light');

  iconBlack.style.display = 'none';
  iconLight.style.display = 'block';

  body.style.background = '#202022';
  body.style.transition = '0.2s';

  main.style.boxShadow = '0 0 5px 4px #131313ad';

  buttonAdd.style.boxShadow = '0 0 5px 4px #131313ad';

  shadowInfo.style.boxShadow = '0 0 5px 4px #131313ad';

  buttonTraslateRigth.style.boxShadow = '0 0 5px 4px #131313ad';
  buttonTraslateRigth.style.background = '#202022';

  colorTextBody.forEach((element) => {
    element.style.color = '#fff';
  });

  sizeList.forEach((element) => {
    element.style.boxShadow = '0 0 5px 4px #131313ad';
  });
});
