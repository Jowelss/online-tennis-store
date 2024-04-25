const colors = document.querySelectorAll('.color-list__link');

const cart = [{}];

colors.forEach((color) => {
  color.addEventListener('click', () => {
    cart[0].color = color.id;
    console.log(cart);
    // Ya me estoy haciendo un idea
  });
});
