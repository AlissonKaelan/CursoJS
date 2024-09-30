let num = document.getElementById('fnum') //Variavel do valor que vai ser recebido na caixa fnum
let lista = document.getSelection('select#flista') // Select onde vai ter os numeros add
let res = document.querySelector('div#res')  //res para o button Finalizar
let Valores = [] // Lista Vetor

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //Verifica se é pu não um número e se esta entre 1 e 100
        return true
    } else {
        return false
    }
}
    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, Valores)) {//varificar o valor dentro de número && se não estiver na lista 
            //&& = na      ! = não
            Valores.push(Number(num.value)) //push = adicionar valor ao array Valores
            let item = document.createElement('option')//criando elemento item que vai ser o numero adicionado na lista
            item.text = `Valor ${num.value} Adicionado`
            lista.appendChild(item)
        } else {
            window.alert('Valor invalido')
        }
        num.value = ''
        num.focus()

    }

    function Finalizar(){

        
    }
