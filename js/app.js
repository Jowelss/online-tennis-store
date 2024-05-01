const list = document.querySelectorAll('.list__select');
const buttonAdd = document.getElementById('buys-add');

function extraerDatos() {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    console.log(element);
  }
}

extraerDatos();
