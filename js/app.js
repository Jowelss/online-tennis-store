const select = document.querySelectorAll('.product-container');

function Shoes(color, size) {
  this.color = color;
  this.size = size;
}

select.forEach((item) => {
  item.addEventListener('click', (e) => {
    const get = new Shoes(e.target.value, undefined);
    if (get.size === 'undefined') {
      get.size = e.target.value;
      return;
    } else {
      get.size = e.target.value;
      // We continued with the objects
    }

    console.log(get);
  });
});
