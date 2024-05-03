const colorList = document.querySelectorAll('.color-list__select');
const sizeList = document.querySelectorAll('.size-list__select');
const nameProduct = document.querySelector('.product-title').textContent;
const buttonAdd = document.getElementById('buys-add');

const colorProduct = [];
const sizeProduct = [];

function addCart() {
  const cart = [];

  const coso = {
    nombre: nameProduct,
    color: colorProduct[0],
    size: sizeProduct[0],
  };

  cart.push(coso);
  console.log(coso);
}

function extraerDatosColor(evento) {
  if (colorProduct.length < 1) {
    colorProduct.includes(evento)
      ? console.log('El elemento ya existe en el carrito')
      : colorProduct.push(evento);
  } else {
    console.log('Máximo de elecciones alcanzadas');
  }
}

function extraerDatosSize(evento) {
  if (sizeProduct.length < 1) {
    sizeProduct.includes(evento)
      ? console.log('El elemento ya existe')
      : sizeProduct.push(evento);
  } else {
    console.log('Máximo de elecciones alcanzadas');
  }
}

buttonAdd.addEventListener('click', addCart);

colorList.forEach((item) => {
  item.addEventListener('click', (e) => extraerDatosColor(e.target.value));
});

sizeList.forEach((item) => {
  item.addEventListener('click', (e) => extraerDatosSize(e.target.value));
});
