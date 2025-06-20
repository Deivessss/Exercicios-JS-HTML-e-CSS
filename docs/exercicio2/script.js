function verificar(){
    // Pegando os valores
    let ano = window.document.getElementById('ano').value
    let sexo = window.document.getElementsByName('sexo')
    let genero = ''
    let res = window.document.getElementById('res')
    let idade = 2025 - Number(ano)
    let img = window.document.getElementById('img')

    // Garantindo que o ano não fique em branco e não seja > que o ano atual:
    if(ano === ''){
        alert('Erro! Digite um ano de nascimento válido.')
        return
    }else if(ano > 2025){
        alert('Perdão, o site não funciona para quem veio do futuro.')
        return
    }
    
    // Verificando o genêro:
    if (sexo[0].checked){
        genero = 'Homem'
    }
    else{
        genero = 'Mulher'
    }


    // Aplicando a mensagem correta para mostrar ao usuário:
    if (genero === 'Homem'){
        if (idade < 10){
            res.innerHTML = `Detectamos um bebê🍼 masculino com ${idade} anos!`
            img.src = 'bebe-m.jpg'
        }else if(idade < 21){
            res.innerHTML = `Detectamos um jovem👦 ${genero} com ${idade} anos!`
            img.src = 'jovem-m.jpg'
        }else if(idade < 60){
            res.innerHTML = `Detectamos um adulto🧑 ${genero} com ${idade} anos!`
            img.src = 'adulto-m.jpg'
        }else if(idade >= 60){
            res.innerHTML = `Detectamos um idoso🧓 ${genero} com ${idade} anos!`
            img.src = 'idoso-m.jpg'
        }
    }
    else if(genero === 'Mulher'){
        if (idade < 10){
            res.innerHTML = `Detectamos um bebê🍼 feminino com ${idade} anos!`
            img.src = 'bebe-f.jpg'
        }else if(idade < 21){
            res.innerHTML = `Detectamos uma jovem👧 ${genero} com ${idade} anos!`
            img.src = 'jovem-f.jpg'
        }else if(idade < 60){
            res.innerHTML = `Detectamos uma adulta👩 ${genero} com ${idade} anos!`
            img.src = 'adulto-f.jpg'
        }else if(idade >= 60){
            res.innerHTML = `Detectamos uma idosa👵 ${genero} com ${idade} anos!`
            img.src = 'idoso-f.jpg'
        }
    }
    img.style.display = 'block'
}
