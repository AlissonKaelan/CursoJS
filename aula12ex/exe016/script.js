function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
//var hora = 1
msg.innerHTML = `Agora são ${hora} Horas.` //mensagme falando a hora


if(hora >= 1 && hora < 12){
//Bom dia
img.src = 'Manhã.png.png'
document.body.style.background = '#9fd76f'
} else if(hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'Tarde.png.png'
    document.body.style.background = '#ff8716'
} else {
//Boa Noite
img.src = 'Noite.png.png' //add imagem 'nome da imagem'
 document.body.style.background = '#0020a4' // cor do fundo 

}



}


