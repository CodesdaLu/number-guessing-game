let listnumsort = [];
let numlimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;




function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

const msgInicial = () => {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

msgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Aeee Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', msgTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor')

        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }

        tentativas++;

        limparInput();
    }
}


function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numlimite + 1);
    let qntElements = listnumsort.lenght;


    if (qntElements == numlimite) {
        listnumsort = [];

    }

    if (listnumsort.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listnumsort.push(numEscolhido);
        console.log(listnumsort);
    }
    return numEscolhido;

}



function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    msgInicial();
    limparInput();
    document.getElementById('reiniciar').setAttribute('disabled', true);

    if (listnumsort.length === numlimite) {
        listnumsort = [];
        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
        msgInicial();
        limparInput();
        document.getElementById('reiniciar').setAttribute('disabled', true);
        console.log("Array reiniciada!");

    }


}










