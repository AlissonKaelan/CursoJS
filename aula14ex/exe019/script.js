function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('saltab')

            if(num.value.length == 0){
            tab.innerHTML = ''
                window.alert('Por favor digite um numero')
            }else{
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = '' //limpar o resultado anterior 
        while(c <= 10){ //Contador vai mutiplicar ate o numero 10
            let item = document.createElement('option') // Criado as  opiçoes de dentro do option
            item.text = `${n} * ${c} = ${n*c}` //Calculo apresentado dentro do option 
            item.value = `tab ${c}` //Valores para cada numero selecionado na option
            tab.appendChild(item) //Adicionar elemento filho
            c++ //Encremento
        }
    }




}