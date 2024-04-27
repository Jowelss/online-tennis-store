const colors = document.querySelectorAll('.color-list__link');

const cart = [];

colors.forEach((element) => {
  element.addEventListener('click', (e) => {
    cart.push(e.target.id);
    console.log(cart);
  });
});
