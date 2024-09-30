//var hora = 20 
var Agora = new Date() 
var hora = Agora.getHours() //Pega a hora do sistema 

//var hora = 23
console.log(`Agora são exatamente ${hora} horas.`)
if(hora <5){
    console.log('Boa madrugada')
}else if(hora <=12){
    console.log('Bom dia ') 
}else if(hora <= 18){
    console.log('Boa Tarde')
} else if(hora <=23 ) {
    console.log('Boa Noite')
}  