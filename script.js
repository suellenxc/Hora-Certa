function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('img');
var data = new Date(); 
var hora = data.getHours();
var min = data.getMinutes();
msg.innerHTML = (`Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos`)
if(hora >= 0 && hora < 12){
    img.src = 'img/fotoManha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18){
    img.src = 'img/fotoTarde.png'
    document.body.style.background = '#b9846f'
}else{
    img.src = 'img/fotoNoite.png'
    document.body.style.background = '#515154'
}
}