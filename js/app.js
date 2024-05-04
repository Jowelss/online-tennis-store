const colorList = document.querySelectorAll('.color-list__select');
const image = document.querySelector('.picture-image');
const sizeList = document.querySelectorAll('.size-list__select');
const nameProduct = document.querySelector('.product-title').textContent;
const buttonAdd = document.getElementById('buys-add');

const cart = [];

const data = {};

function addCart() {
  const newDate = { ...data };
  cart.push(newDate);
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
