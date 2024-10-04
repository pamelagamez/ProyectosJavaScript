function contador(){
  let segundos = +document.querySelector('#segundos').value;
  setTimeout(finalizar, segundos * 1000);
}
function finalizar(){
document.querySelector('#salida').textContent= 'ON';
let alarma = document.querySelector('#alarma');
alarma.play();
  
}
function reiniciar(){
  location.reload();
}