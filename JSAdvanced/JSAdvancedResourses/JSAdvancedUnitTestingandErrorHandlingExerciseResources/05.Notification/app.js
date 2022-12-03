function notify(message) {
  let divContext = document.getElementById(`notification`);
  divContext.innerText = message;
  divContext.style.display = `block`;
  divContext.addEventListener(`click`, changeStyles);

  function changeStyles(e) {

    e.target.style.display = `none`;
  }
}
