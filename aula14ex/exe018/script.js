function contar(){
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        window.alert('[Erro] esta faltando dados')
        
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo invalido considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
           for(let c = i; c <= f; c += p){ //"c"contador += receber ele mesmo mais o "p"
            res.innerHTML += ` ${c} \u{1F449}	`  //Codigo do emoji sem a auteração: U+1F449
                                        }
            res.innerHTML += ` \u{1F3C1} ` //Emoji bandeirinha fim
                } else {
                    //Contegem decrescente
                    for(let c = i; c >= f; c -= p){ // -= perder o passo
                        res.innerHTML += `${c}  \u{1F449} `
                    }
                }
            
        } 
            

}
