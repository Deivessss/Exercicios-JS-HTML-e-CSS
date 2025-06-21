function tabuada(){
    /* Pegando todos os valores: */
    let n = window.document.getElementById('num').value
    let res = window.document.getElementById('resultado')

    /* Garantindo que o número não fique vazio: */
    if (n == ''){
        alert('Erro! Por favor, digite um número, para ver sua tabuada.')
        return
    }

    /* Calculando: */
    res.value = ''
    for(let i = 1; i <= 10; i+=1){
        res.value += `${Number(n)} x ${i} = ${Number(n) * i}\n`
    }
}