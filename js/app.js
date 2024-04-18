const buttonNext = document.getElementById('button_next');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

buttonNext.addEventListener('click', () => {
  const copyTemplate = document.importNode(template.content, true);
  const elements = copyTemplate.querySelectorAll('.product');
  console.log(elements);
});
