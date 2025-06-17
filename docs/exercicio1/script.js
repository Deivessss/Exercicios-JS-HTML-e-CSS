// Função que pega a hora atual do sistema, para inserir na tela.
function carregar() {
    let msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    let agora = new Date()
    let hora = agora.getHours().toString().padStart(2, '0')
    let minuto = agora.getMinutes().toString().padStart(2, '0')
    let segundos = agora.getSeconds().toString().padStart(2, '0')
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundos}`

    //Verifica a hora atual para carregar a imagem correta: 
    if (hora >= 0 && hora < 12){
        //Dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#0ebee2'
    }
    else if (hora >= 12 && hora < 18){
        //Tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        //Noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}