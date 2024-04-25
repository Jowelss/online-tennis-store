const colors = document.querySelectorAll('.color-list__link');
const sizes = document.querySelectorAll('.size-item__link');

const getData = () => {
  const arrayProduct = Array.from(colors);
  const pero = arrayProduct.find((item) => item.id === 'blue');
  function product(uno) {
    this.uno = uno;
  }
  const coso = new product(pero.id);
  console.log(coso);
};

getData();
