// Write your code here!
let tempMain = document.getElementById('main');
tempMain.remove();

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.className = "victory";
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Liza is the champion";