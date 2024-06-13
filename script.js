const perguntas = [
    {
    enunciado: "você já sabe o que vai fazer depois da escola?",
    alternativas: [
    "já sei sim",
    "Não sei, estou pensando"
    ]
    },
    {
    enunciado: "você prefere humanas ou exatas?",
    alternativas: [
    "humanas",
    "exatas"
    ]
    },
    {
    enunciado: "você acha que no futuro vão ter professores nas escolas?",
    alternativas: [
    "não, a tecnologia vai dominar muitas coisas ainda, e me preocupo com quem vai perder o emprego",
    "acho que pode acabar as tecnologias daqui para frente."
    ]
    },
    {
    enunciado: "como foi seu ultimo ano da escola?",
    alternativas: [
    "legal, sinto saudades.",
    "chato, nao me dava bem com ninguem"
    ]
    
    },
    {
    enunciado: "qual sua opnião sobre a merenda da escola?",
    alternativas: [
    "muito boa, sempre entregam tudo!",
    "boa, mas poderiam melhorar"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário, parabéns!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();

