function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
         window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
       var fsex = document.getElementsByName("radsex")
       var idade = ano - Number(fano.value)
       var genero = " "
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
          genero = "Homen"
          if(idade>= 0 && idade < 10 ){
            //crianca
            img.setAttribute('src','bebe m.png')
          } else if(idade < 21){
            //jovem
            img.setAttribute('src','jovem m.png')
          }else if (idade<50){
            //adulto
            img.setAttribute('src','homem.png')
          }else{
            //idoso
          }
          
       } else{    /*Somente tirei o "if" daqui*/ 
          genero = "Mulher"
          if(idade>= 0 && idade < 10 ){
            //crianca
            img.setAttribute('src','bebe f.png')
          } else if(idade < 21){
            //jovem
            img.setAttribute('src','jovem.png')
          }else if (idade<50){
            //adulto
            img.setAttribute('src','mulher.png')
          }else{
            //idosa
            img.setAttribute('src','idosa.png')
          }
       }
       res.style.textAlign = 'center'
       res.innerHTML=(`${genero} com idade ${idade} anos.`)
       res.appendChild(img)
     }
 }