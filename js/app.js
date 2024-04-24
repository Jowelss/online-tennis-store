const button = document.getElementById('button_next');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

button.addEventListener('click', () => {
  const copyTemplate = document.importNode(template.content, true);
  const title = copyTemplate.querySelector('.product-3__title').textContent;
});

// function templateCopy() {
// }
