const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:" Você utiliza assistentes de IA, como Siri, Alexa ou Google Assistente, para ajudar em tarefas diárias, como definir lembretes ou fazer perguntas?",
        alternativas: [
            {
                texto: "Sim, uso esses assistentes regularmente para facilitar minhas tarefas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, não utilizo esses assistentes no meu dia a dia",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Na sua opinião, o principal benefício da IA no cotidiano é a otimização do tempo ou a melhoria da qualidade das entregas?",
        alternativas: [
            {
                texto: "A otimização do tempo.",
                afirmacao: "afirmação"
            },
            {
                texto: "A melhoria da qualidade das entregas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você se preocupa mais com a segurança dos dados pessoais em sistemas de IA ou com a dependência excessiva da tecnologia?",
        alternativas: [
            {
                texto: "A segurança dos dados pessoais.",
                afirmacao: "afirmação"
            },
            {
                texto: "A dependência excessiva da tecnologia.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual dos seguintes impactos da IA no seu dia a dia você considera mais significativo: a personalização de conteúdos (notícias, recomendações) ou a automação de processos (bancários, compras)?",
        alternativas: [
            {
                texto: "A personalização de conteúdos.",
                afirmacao: "afirmação"
            },
            {
                texto: "A automação de processos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Considerando o futuro, você espera que a IA torne seu dia a dia mais complexo ou mais simplificado? ",
        alternativas: [
            {
                texto: "Mais complexo, com novas demandas e aprendizados.",
                afirmacao: "afirmação"
            },
            {
                texto: "Mais simplificado, automatizando processos e facilitando escolhas. ",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
