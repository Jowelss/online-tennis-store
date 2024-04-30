const select = document.querySelectorAll('.product-container');

function Shoes(color, size) {
  this.color = color;
  this.size = size;

  this.runSize = function name() {
    this.size();
  };
}

select.forEach((item) => {
  item.addEventListener('click', (e) => {
    const get = new Shoes(e.target.value, function coso() {
      console.log(e.target.value);
    });
    get.runSize();
  });
});
