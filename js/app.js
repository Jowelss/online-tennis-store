const list = document.querySelectorAll('.list__select');
const nameProduct = document.querySelector('.product-title').textContent;
const buttonAdd = document.getElementById('buys-add');

const styleProduct = [];

function addCart() {
  const cart = [];

  const coso = {
    nombre: nameProduct,
    color: styleProduct[0],
    size: styleProduct[1],
  };

  cart.push(coso);
  console.log(cart);
}

function extraerDatos(evento) {
  if (styleProduct.length < 2) {
    styleProduct.includes(evento)
      ? console.log('El elemento ya existe en el carrito')
      : styleProduct.push(evento);
  } else {
    console.log('Máximo de elecciones alcanzadas');
  }
}

buttonAdd.addEventListener('click', addCart);

list.forEach((item) => {
  item.addEventListener('click', (e) => extraerDatos(e.target.value));
});
