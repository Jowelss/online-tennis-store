const colors = document.querySelectorAll('.color-list__link');
const sizes = document.querySelectorAll('.size-item__link');

const cartData = (color) => {
  const product = [];
};

for (let i = 0; i < colors.length; i++) {
  const contentColor = colors[i];

  contentColor.addEventListener('click', (e) => {
    cartData(e.target.id);
  });
}
