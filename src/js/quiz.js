document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    // ITENS ACIMA LINKAM OS IDs aos elementos do html

    // CRIANDO AS PERGUNTAS
    const questoes = [
        {
            pergunta: 'Qual é o custo médio para rodar 100km com um carro elétrico?',
            opcoes: ['Cerca de R$ 40', 'Cerca de R$ 10', 'Cerca de R$ 25'],
            correta: 'Cerca de R$ 10'
        },
        {
            pergunta: 'Quantas peças móveis, em média, um motor a combustão possuí?',
            opcoes: ['Mais de 1000', 'Cerca de 200', 'Menos de 100'],
            correta: 'Cerca de 200'
        },
        {
            pergunta: 'Qual autonomia média de um carro elétrico moderno?',
            opcoes: ['150 km', '300 km', '500 km'],
            correta: '300 km'
        },
        {
            pergunta: 'Emissão de CO₂ de um carro elétrico em uso diário',
            opcoes: ['Alta, semelhante aos a combustão', 'Zero emissão direta', 'Emite apenas durante frenagem'],
            correta: 'Zero emissão direta'
        },
        {
            pergunta: 'Quanto tempo leva para carregar um elétrico em uma estação rápida (80%)?',
            opcoes: ['15-30 minutos', '1-2 horas', '4-6 horas'],
            correta: '15-30 minutos'
        },
        {
            pergunta: 'Qual o impacto do freio regenerativo em um carro elétrico?',
            opcoes: ['Reduz desgaste de freios e recarrega bateria', 'Aumenta o consumo de energia', 'Não tem efeito relevante'],
            correta: 'Reduz desgaste de freios e recarrega bateria'
        },
        {
            pergunta: 'É possível carregar um carro elétrico em casa?',
            opcoes: ['Sim, com tomada comum ou wallbox', 'Não, apenas em estações públicas', 'Somente em concessionárias'],
            correta: 'Sim, com tomada comum ou wallbox'
        },
        {
            pergunta: 'Qual o tempo médio de vida útil das baterias modernas?',
            opcoes: ['2 a 4 anos', '5 a 8 anos', '8 a 15 anos'],
            correta: '8 a 15 anos'
        },
        {
            pergunta: 'Carros elétricos valorizam no mercado futuro?',
            opcoes: ['Sim, especialmente modelos populares e eficientes', 'Não, desvalorizam mais rápido', 'Valorizam apenas se forem esportivos'],
            correta: 'Sim, especialmente modelos populares e eficientes'
        },
        {
            pergunta: 'Carro elétrico é silencioso?',
            opcoes: ['Não, faz muito barulho', 'Sim, é quase silencioso', 'Só é silencioso acima de 80 km/h'],
            correta: 'Sim, é quase silencioso'
        }
    ];

    // DANDO FUNCIONALIDADE AOS BOTÕES E BARRAS DO QUIZ  

let perguntas = 0;
    let acertos = 0;
    const respostas = [];

    function mostrarPergunta() {
        if (perguntas < questoes.length) {
            const atual = questoes[perguntas];
            pergunta.textContent = atual.pergunta;
            resposta.innerHTML = '';

            atual.opcoes.forEach(opcao => {
                const label = document.createElement('label');
                label.innerHTML = `
                    <input type="radio" name="opcao" value="${opcao}">
                    ${opcao}
                `;
                resposta.appendChild(label);
                resposta.appendChild(document.createElement('br'));
            });

            mensagem.textContent = '';
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML = '';

        questoes.forEach((q, index) => {
            const correta = q.correta === respostas[index] ? '✅' : '❌';
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${q.pergunta}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span> ${correta}<br>
            Resposta Correta: ${q.correta}`;
            listaResultado.appendChild(listaItem);
        });

        const mensagemFinal = document.createElement('p');

        if (acertos >= 5) {
            mensagemFinal.innerHTML = `
                <strong>Parabéns! Você acertou ${acertos} de ${questoes.length} perguntas.</strong><br><br>
                Agora que você entende melhor os motivos por trás da escolha de um carro elétrico, talvez o próximo passo seja testar essa nova experiência. Acesse mais para obter as recompensas.<br><br>
                💬 Deseja ver os modelos disponíveis ou fazer uma simulação de orçamento?
            `;
        } else {
            mensagemFinal.innerHTML = `
                <strong>Você acertou apenas ${acertos} de ${questoes.length} perguntas.</strong><br><br>
                Você tem a garra de ir atrás, entretanto para obter recompensas é necessário acertar pelo menos 5 das questões!<br><br>
                🔄 Clique no botão abaixo para tentar novamente.
            `;
        }

        listaResultado.appendChild(mensagemFinal);
    }

    function nextQuestao() {
        const selecionado = document.querySelector('input[name="opcao"]:checked');
        if (!selecionado) {
            mensagem.textContent = "Por favor, selecione uma opção válida.";
            return;
        }

        const respostaUsuario = selecionado.value;
        respostas.push(respostaUsuario);

        if (respostaUsuario === questoes[perguntas].correta) {
            acertos++;
        }

        perguntas++;
        mostrarPergunta();
    }

    function reiniciarQuiz() {
        perguntas = 0;
        acertos = 0;
        respostas.length = 0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click', nextQuestao);
    reiniciarBotao.addEventListener('click', reiniciarQuiz);

    mostrarPergunta();
});