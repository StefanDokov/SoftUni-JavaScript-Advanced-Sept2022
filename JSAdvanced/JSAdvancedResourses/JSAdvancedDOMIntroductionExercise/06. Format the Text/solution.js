function solve() {
  let textArea = document.getElementById(`input`).value;
  let output = document.getElementById(`output`);
  output.innerHTML = "";
  let sentenses = textArea.split(".").filter(x => x.length > 0);
  let sent = [];
  let parcount = 0;
  let g = 3;
  
  while (sentenses.length > 0){
    if (parcount == 0 && sentenses.length < 3){
      g = sentenses.length;
    }
    let i = sentenses.shift();
     parcount++;
     sent.push(i);
     if (parcount / g == 1){
       let resText = sent.join(". ") + ".";
       output.innerHTML += `<p>${resText}</p>`;
       parcount = 0;
       sent = [];
     }
  }
    
  
}