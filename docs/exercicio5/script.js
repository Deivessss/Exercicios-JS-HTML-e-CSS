/* Pegando os valores: */
let num = []
let text = document.getElementById('textarea')
let res = document.getElementById('res')

/* Quando o usuário for adicionar um número: */
function adicionar(){
    let input = document.getElementById('inputnum')
    let inputnum = Number(input.value)

    if (input.value.length === 0 || inputnum < 1 || 
        inputnum > 100 || num.includes(inputnum)){
            alert('Erro! Valor inválido, ou já adicionado na lista.')
            input.focus()
            return
        }else{
            num.push(inputnum)
            input.value = ''
            res.innerHTML = ''
            text.value += `Valor ${inputnum} adicionado.\n`
            input.focus()
        }
}

/* Quando o usuário clicar em finalizar: */
function finalizar(){
    if (num.length === 0){
        res.innerHTML = 'Nenhum valor adicionado.'
    }else{
        res.innerHTML= 
        `Ao todo, temos ${num.length} números cadastrados.<br><br>
        O maior valor informado foi ${Math.max(...num)}.<br><br>
        O menor valor informado foi ${Math.min(...num)}.<br><br>
        Somando todos os valores, temos ${num.reduce((acc, val) => acc + val, 0)}.<br><br>
        A média dos valores digitados é ${(num.reduce((acc, val) => acc + val, 0)/num.length)}.`
    }
}