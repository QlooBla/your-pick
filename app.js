"use strict"
const item = document.querySelector('.item');
const placeholder = document.querySelectorAll('.drag-placholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);


placeholder.forEach((hold) => {
  hold.addEventListener('dragenter', dragEnter);
  hold.addEventListener('dragleave', dragLeave);
  hold.addEventListener('drop', dragDrop);
  hold.addEventListener('dragover', dragOver);
})

function dragStart(event) {
  event.target.classList.add('border');
  setTimeout(() => event.target.classList.add('hovered'), 0)
}
function dragEnd(event) {
  event.target.className = 'item';
}
function dragOver(event) {
  event.preventDefault()
}
function dragEnter(event) {
  event.target.classList.add('hoverTop')
}
function dragLeave(event) {
  event.target.classList.remove('hoverTop')
}




function dragDrop(event) {
  event.target.append(item)
  event.target.classList.remove('hoverTop');

}
