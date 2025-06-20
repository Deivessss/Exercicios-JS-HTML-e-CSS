function contar(){
    /* Pegando os valores: */
    let inicio = Number(window.document.getElementById('inicio').value)
    let fim = Number(window.document.getElementById('fim').value)
    let passo = Number(window.document.getElementById('passo').value)
    let res = window.document.getElementById('resultado')

    /* Garantindo que nenhum dos campos fique em branco: */
    if(inicio == '' || fim == '' || passo <= 0){
        alert('Erro! Por favor, preencha todos os campos, e passo deve ser maior que 0.')
        return
    }

    /* Aplicando o for: */
    res.innerHTML = ''
    if(inicio < fim){
        for (let n = inicio; n <= fim; n+= passo){
            res.innerHTML += `${n} 👉 `
        }
        res.innerHTML += '🏁'
    }else{
        for (let n = inicio; n >= fim; n-= passo){
            res.innerHTML += `${n} 👉 `
        }
        res.innerHTML += '🏁'
    }
}   