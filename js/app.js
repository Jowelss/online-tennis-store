const colorList = document.querySelectorAll('.color-list__select');
const buttonAdd = document.getElementById('buys-add');
const input = document.querySelectorAll('input');
const image = document.querySelector('.picture-image');
const sizeList = document.querySelectorAll('.size-list__select');

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
