const product = document.querySelector('.main-product__content');

const colors = ['red', 'yellow', 'blue', 'green', 'black'];
const sizes = ['S', 'L', 'M', 'O', 'R'];

const array = [];

product.addEventListener('click', (e) => {
  const item = e.target.id;

  for (const color of colors) {
    if (color === item) {
      if (!array.includes(item)) {
        array.push(item);
      }
    }
  }

  for (const size of sizes) {
    if (size === item) {
      if (!array.includes(item)) {
        array.push(item);
      }
    }
  }
  console.log(array);
});
