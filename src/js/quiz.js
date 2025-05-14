document.addEventListener('DOMContentLoaded', () => {
  const pergunta = document.getElementById('pergunta');
  const resposta = document.getElementById('container-resposta');
  const proximaPergunta = document.getElementById("proximo");
  const mensagem = document.getElementById('message');
  const containerPerguntas = document.getElementById('container-perguntas');
  const containerResultado = document.getElementById('container-resultado');
  const listaResultado = document.getElementById('lista-resultado');
  const reiniciarBotao = document.getElementById('inicio-btn');

  const letras = ['a)', 'b)', 'c)'];

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

  let perguntas = 0;
  let acertos = 0;
  const respostas = [];

  function mostrarPergunta() {
    if (perguntas < questoes.length) {
      const atual = questoes[perguntas];
      pergunta.textContent = atual.pergunta;
      resposta.innerHTML = '';

      atual.opcoes.forEach((opcao, index) => {
        const id = `opcao-${Math.random()}`;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opcao";
        input.value = opcao;
        input.id = id;

        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = `${letras[index]} ${opcao}`;

        resposta.appendChild(input);
        resposta.appendChild(label);
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
      listaItem.innerHTML = `<strong>${q.pergunta}</strong><br>Resposta: <span>${respostas[index]}</span> ${correta}<br>Correta: ${q.correta}`;
      listaResultado.appendChild(listaItem);
    });

    const mensagemFinal = document.createElement('p');
    mensagemFinal.innerHTML = acertos >= 5
      ? `<strong>Parabéns! Você acertou ${acertos} de ${questoes.length} perguntas.</strong><br>Você pode fazer uma simulação de orçamento!`
      : `<strong>Você acertou ${acertos} de ${questoes.length} perguntas.</strong><br>Tente novamente para conseguir vantagens.`;

    listaResultado.appendChild(mensagemFinal);
  }

  function nextQuestao() {
    const selecionado = document.querySelector('input[name="opcao"]:checked');
    if (!selecionado) {
      mensagem.textContent = "Por favor, selecione uma opção.";
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