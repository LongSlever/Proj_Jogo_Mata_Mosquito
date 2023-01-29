
var alt = 0 
var lar = 0
var vidas = 3
var tempo = 10

var criarTempo = 1500;

document.getElementById('tempo').innerHTML = tempo

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
    criarTempo = 1500;
}else if (nivel === 'normal') {
    criarTempo = 1000;
}else if (nivel === 'dificil') {
    criarTempo = 500;
}

function ajustaTamanho() {
     alt = window.innerHeight
     lar = window.innerWidth
}

ajustaTamanho()

var cronometro = setInterval(function() {
    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href='vitoria.html'
    }
    document.getElementById('tempo').innerHTML = tempo
}, 1000)

function posicaoRandom() {

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas >= 1) {
        document.getElementById('v'+ vidas).src="imagens/coracao_vazio.png"
        vidas -=1;
        }else {
            window.location.href ='fim_de_jogo.html'
        }

    }
    

    var posicaoX = Math.floor(Math.random() * lar) - 100
    var posicaoY =  Math.floor(Math.random() * alt) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAle() + ' ' + ladoAle()

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id ='mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito) 
}

function tamanhoAle() {
    var classe = Math.floor(Math.random() * 3) + 1
    
    switch(classe) {
        case 1 :
            return 'mosquito1'
        case 2 :
            return 'mosquito2'
        case 3 :
            return 'mosquito3'
    }
}

var criarMosca= setInterval(function() {
    posicaoRandom()
}, criarTempo)

function ladoAle() {
    var estilo = Math.floor(Math.random() * 2) + 1

    switch(estilo) {
        case 2 :
            return 'ladob'
    }
}




iniciarJogo()

