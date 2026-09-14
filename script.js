const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Helena percebe que passa mais de 6 horas por dia no celular. O algoritmo das redes e os chats de Ia começaram a antecipar tudo o que ele quer ver gerando um ciclo infinito de notificações e conteúdos altamente personaçizados. Em sala de aula a professora propós um debate sobre como a tecnologia pode influenciar a saúde mental. Como Helena se posiciona?",
    alternativas: [
        {
            texto:  "A tecnologia pode trazer benefícios à saúde mental",
            afirmacao: "A tecnologia traz benefícios para a saúde mental, facilitando os estudos, a comunicação e o acesso à informação."
        },
        {
           texto: "A tecnologia pode prejudicar a saúde mental",
           afirmacao: "O uso excessivo da tecnologia prejudica a saúde mental, podendo causar ansiedade, estresse e dependência."
        }
    ]
},
{
    enunciado: "Durante o debate, Helena contou que costuma usar as redes sociais todos os dias. Alguns colegas destacam seus beneficios, enquanto outros falam sobre os problemas que elas podem causar. Como Helena se posciona?",
    alternativas: [
        {
             texto: "As redes sociais podem ser positivas",
             afirmacao: "As redes sociais apresentam benefícios, pois aproximam as pessoas e contribuem para o aprendizado."

        },
        {
            texto: "AS redes sociais podem ser prejudicais",
            afirmacao:  "O uso excessivo das redes sociais prejudica a autoestima e pode afetar negativamente a saúde mental."
        }
       
    ]
},
{
    enunciado: "Na aula seguinte, Helena conheceu ferramentas de inteligência artificial para ajudar nos estudos. A turma disutiu suas vantagens e desafios. Como Hlena se posciona?",
    alternativas: [
        {
            texto: "A inteligência artificial pode ser uma alhiada",
            afirmacao: "A inteligência artificial é uma importante aliada nos estudos, auxiliando na pesquisa e na organização das informações."

       },
       {
        texto:  "A inteligência artificial exige cuidado",
        afirmacao:  "O uso excessivo da inteligência artificial pode gerar dependência e diminuir a autonomia nos estudos."
    }
       
    ]
},
{
    enunciado: "Depois  da pesquisa, Helena percebeu que passava muitas horas em frente ás telas. A professora perguntou à turma quais hábitos poderiam melhorar a saúde mental. Como Helena se posicona?",
    alternativas: [
        {
            texto:"O uso equilibrado da tecnologia faz bem",
            afirmacao: "O uso equilibrado da tecnologia contribui para uma rotina mais saudável e permite aproveitar seus benefícios."

       },
       {
        texto:  "O excesso de telas faz mal",
        afirmacao:  "O excesso de tempo diante das telas prejudica o sono e a capacidade de concentração."
    }
       

    ]
},
{
    enunciado: "Ao inal do projeto, Helena refletiu sobre tudo o que aprendeu e decidiu mudar muitos hábitos relacionados ao uso da tecnologia. Como Helena aredita que deve agir?",
    alternativas: [    
        {
            texto:   "Usar a tecnologi com equilibrio",
            afirmacao: "O uso equilibrado da tecnologia permite aproveitar seus benefícios sem prejudicar a saúde mental."

       },
       {
        texto: "Continuar usando sem limites",
        afirmacao:  "O uso excessivo da tecnologia prejudica a saúde mental e pode causar problemas como estresse, ansiedade e falta de concentração."
    }
       
    ]
}
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
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "  ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
