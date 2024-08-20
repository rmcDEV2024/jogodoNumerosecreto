let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentaivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto ) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentaivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentaivas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número é menor!');
        } else {
           exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentaivas++;
        limparCampo();
        
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quentidadedaListaElementos = listaSorteados.length;

     if (quentidadedaListaElementos == numeroLimite
      ) {
        listaSorteados = []
     }

    if(listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido)
        console.log(listaSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}
let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentaivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto ) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentaivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentaivas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número é menor!');
        } else {
           exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentaivas++;
        limparCampo();
        
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quentidadedaListaElementos = listaSorteados.length;

     if (quentidadedaListaElementos == numeroLimite
      ) {
        listaSorteados = []
     }

    if(listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido)
        console.log(listaSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}
