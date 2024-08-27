const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual é o destino correto para o descarte de pilhas?",
        alternativas: [
            {
                texto: "No lixo comum!",
                afirmacao: "Você errou, pois pilhas e baterias contêm substâncias tóxicas que podem contaminar o solo e a água. Elas devem ser descartadas em locais específicos para evitar danos ao meio ambiente. "
            },



            
            {
                texto: "Em pontos de coleta espcíficos para materiais perigosos",
                afirmacao: "Você acertou! Pilhas e baterias precisam ser levadas a pontos de coleta específicos para garantir que sejam tratadas de forma segura."
            }
        ]
    },
    {
        enunciado: "O que devemos fazer com restos de comida?",
        alternativas: [
            {
                texto: "Colocar no lixo reciclável",
                afirmacao: "Você errou, pois restos de comida não devem ser misturados com materiais recicláveis. Eles devem ser compostados ou descartados no lixo orgânico para evitar contaminação e facilitar a reciclagem de outros materiais."
            },
            {
                texto: "Destinar para compostagem ou lixo orgânico.",
                afirmacao: "Você acertou! Restos de comida devem ser compostados ou destinados ao lixo orgânico, o que contribui para a redução de resíduos e a produção de adubo natural. "
            }
        ]
    },
    {
        enunciado: "Garrafas plásticas devem ser descartadas como:",
        alternativas: [
            {
                texto: "Lixo reciclável",
                afirmacao: "Você acertou!Garrafas plásticas devem se descartadas como recicláveis, ajudando a reduzir o uso de matérias -primas e a quantidade de resíduos nos aterros."
            },
            {
                texto: "Lixo comum",
                afirmacao: "Você errou, pois garrfas plásticas são materiais recicláveis e devem ser descartadas no lixo reciclável para serem reaproveitados na produção de novos produtos."
            }
        ]
    },
      
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();