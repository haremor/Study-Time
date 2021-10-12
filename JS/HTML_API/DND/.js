const elements = document.querySelectorAll(".element");
const areas = document.querySelectorAll(".area");

let currentEl, currentTarget;

areas.forEach(el => {
  el.ondragover = (e) => {
    e.preventDefault();
    currentTarget = e.target
  }
})

elements.forEach(el => {
  el.ondragend = (e) => {
    const targetColor = currentTarget.dataset.color;
    const elColor = currentEl.dataset.color;

    if (targetColor === elColor) {
      currentTarget.classList.add(`filled_${currentEl.dataset.color}`);
    }
  }
  el.ondragstart = (e) => {
    currentEl = e.target;
  }
})