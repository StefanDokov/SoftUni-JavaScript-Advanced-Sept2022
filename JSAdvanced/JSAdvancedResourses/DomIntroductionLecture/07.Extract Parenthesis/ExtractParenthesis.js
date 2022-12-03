function extract(elementId) {
  let elemenText = document.getElementById(elementId).textContent;
  let reg = /\(([^)]+)\)/g;
  let res = [];
  let match = reg.exec(elemenText);
  while(match) {
    res.push(match[1]);
    match = reg.exec(elemenText);
  }
  return res.join(`; `);
}
