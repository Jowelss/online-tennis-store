const colors = document.querySelectorAll('.color-list__link');

const cart = [];

const addCart = (color) => {
  if (cart < 2) {
    cart.push(color);
  } else {
    console.log('coso');
  }
};

colors.forEach((element) => {
  element.addEventListener('click', (e) => {
    addCart(e.target.id);
  });
});
