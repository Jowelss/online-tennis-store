const colors = document.querySelectorAll('.color-list__link');

const cart = [{}];

colors.forEach((color) => {
  color.addEventListener('click', (e) => {
    const item = e.target.id;

    cart.color = item;
    console.log(cart);
  });
});
