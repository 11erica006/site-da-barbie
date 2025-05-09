const perguntas = [
  { pergunta: "Qual é sua cor favorita?", opcoes: ["Rosa", "Roxo", "Azul", "Amarelo", "Vermelho", "Outro"] },
  { pergunta: "Qual é seu passatempo favorito?", opcoes: ["Cuidar da aparência", "Praticar Esportes", "Mexer no celular", "Brincar com Animais", "Dançar ou cantar", "Fazer artesanato"] },
  { pergunta: "Você se considera mais:", opcoes: ["Líder", "Engraçada", "Criativa", "Tímida", "Aventureira", "Romântica"] },
  { pergunta: "Qual animal de estimação você teria?", opcoes: ["Cachorro", "Gato", "Cavalo", "Coelho", "Hamster", "Pássaro"] },
  { pergunta: "Qual carreira combina com você?", opcoes: ["Estilista", "Veterinária", "Cantora", "Engenheira", "Esportista", "Chef"] },
  { pergunta: "O que você prefere fazer em um sábado à noite?", opcoes: ["Sair com amigos", "Ver um filme", "Fazer compras", "Jogar videogame", "Ficar com a família", "Ler um livro"] },
  { pergunta: "Qual dessas qualidades mais combina com você?", opcoes: ["Generosidade", "Coragem", "Inteligência", "Lealdade", "Alegria", "Determinação"] },
  { pergunta: "Qual Barbie é sua favorita?", opcoes: ["Princesa", "Fada", "Popstar", "Espiã", "Sereia", "Mosqueteira"] },
  { pergunta: "Você prefere:", opcoes: ["Cidade grande", "Praia", "Campo", "Montanhas", "Floresta", "Safari"] },
  { pergunta: "Qual dessas frases combina mais com você?", opcoes: ["Você pode ser o que quiser", "Não tenho medo de desafios", "Sempre pronta para ajudar", "Adoro aprender coisas novas", "Gosto de brilhar", "Juntos somos mais fortes"] }
];

const personagens = [
  { nome: "Barbie: Você é otimista, adora moda e sempre tenta ver o melhor nas pessoas. Assim como a Barbie, você é a líder do grupo, ama ajudar os amigos e tem um coração enorme.", imagem: "imagens/barbie.jpg", tags: ["Rosa", "Princesa", "Praia", "Líder", "Mosqueteira", "Estilista", "Sair com amigos", "Fazer compras", "Você pode ser o que quiser"] },
  { nome: "Ken: Você é charmoso, confiante e um pouco vaidoso, mas no fundo é um grande amigo. Pode não ser perfeito em tudo (ninguém é), mas sempre tenta seu melhor – especialmente quando se trata das pessoas que ama.", imagem: "imagens/ken.jpg", tags: ["Azul", "Coragem","Romântica", "Inteligência", "Determinação", "Juntos somos mais fortes", "Engenheira", "Sempre pronta para ajudar",  "Cachorro"] },
  { nome: "Skipper: Você é inteligente, sarcástica e a mais realista do grupo. Não cai em modinhas bobas e prefere lógica a drama. Seu humor ácido é sua arma secreta!", imagem: "imagens/skiper.jpg", tags: ["Roxo", "Tímida", "Criativa", "Ver um filme", "Jogar videogame", "Mexer no celular", "Espiã", "Tecnologia" ] },
  { nome: "Stacy:  Você é hiperativa, cheia de energia e adora esportes. Nada te derruba – você é a pessoa que transforma tudo em uma aventura e sempre arrasa nas competições.", imagem: "imagens/stacy.jpg", tags: ["Azul","Esportista",  "Campo", "Espiã",  "Aventureira",  "Praticar Esportes", "Floresta", "Cavalo"] },
  { nome: "Chelsea: Você é brincalhona, imaginativa e um pouco arteira. Sua criatividade não tem limites, e você vê magia em tudo – até nos momentos mais simples.", imagem: "imagens/chelsea.jpg", tags: ["Rosa","Fada", "Alegria", "Safari", "Coelho", "Veterinária", "Hamster", "Brincar com Animais",  "Ficar com a família",] },
  { nome: "Raquelle: Você é dramática, sabe o que quer e não tem medo de ser o centro das atenções. Pode até parecer vilã às vezes, mas no fundo só precisa de um pouco de carinho (e talvez um gato malvado para chamar de seu).", imagem: "imagens/raquelle.jpg", tags: ["Vermelho", "Cidade grande", "Criativa", "Determinação", "Cuidar da aparência", "Fazer compras", "Gosto de brilhar", "Gato"] },
  { nome: "Ryan: Você é extravagante, cheio de estilo e adora ser o centro das atenções. Pode até ser um pouco dramático, mas isso só torna sua vida mais divertida.", imagem: "imagens/ryan.jpg", tags: ["Azul","Cantora", "Popstar", "Cuidar da aparência", "Cidade grande", "Dançar ou cantar", "Gosto de brilhar", "Não tenho medo de desafios"] },
  { nome: "Teresa: Você é a melhor amiga que todos querem ter – leal, doce e sempre pronta para apoiar quem ama. Pode não ser a mais extravagante, mas é a pessoa que mantém o grupo unido.", imagem: "imagens/teresa.jpg", tags: ["Outro","Engraçada", "Estilista", "Gato", "Adoro aprender coisas novas", "Praia", "Juntos somos mais fortes", "Lealdade"] },
  { nome: "Summer: Você é esportiva, competitiva e um pouco metida, mas no fundo tem um bom coração. Adora um desafio e não aceita perder – seja no surf, no futebol ou na vida.", imagem: "imagens/summer.jpg", tags: ["Amarelo", "Esportista", "Coragem", "Montanhas", "Aventureira", "Sereia", "Cavalo", "Praticar Esportes"] },
  { nome: "Midge: Você é a pessoa mais engraçada e desastrada do grupo – mas todo mundo te ama por isso! Você não leva a vida tão a sério e sempre transforma confusões em histórias hilárias.", imagem: "imagens/midie.jpg", tags: ["Outro", "Ver um filme", "Chef", "Ler um livro", "Lealdade", "Adoro aprender coisas novas", "Generosidade", "Fazer artesanato"] },
  { nome: "Nikki: Você é criativa, descolada e tem um estilo único. Não segue modinhas – você cria as suas. Seja na música, na arte ou no jeito de ver a vida, você marcha no seu próprio ritmo.", imagem: "imagens/nikki.jpg", tags: ["Roxo","Criativa","Tímida", "Praia", "Você pode ser o que quiser", "Sempre pronta para ajudar",  "Cachorro", "Moda"] }
];

let indiceAtual = 0;
let respostas = [];

document.addEventListener("DOMContentLoaded", () => {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const botaoProximo = document.getElementById("proximo");
  const progressoEl = document.getElementById("progress");
  const resultadoBox = document.getElementById("resultado");
  const personagemNome = document.getElementById("personagem-nome");
  const personagemImagem = document.getElementById("personagem-imagem");
  const quizBox = document.getElementById("quiz-box");
  const botaoVoltar = document.createElement("button"); // Novo botão

  // Função para mostrar a pergunta
  function mostrarPergunta() {
    const perguntaAtual = perguntas[indiceAtual];
    perguntaEl.textContent = perguntaAtual.pergunta;
    opcoesEl.innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
      const label = document.createElement("label");
      label.innerHTML = `        
        <input type="radio" name="opcao" value="${opcao}">
        ${opcao}
      `;
      opcoesEl.appendChild(label);
      opcoesEl.appendChild(document.createElement("br"));
    });

    botaoProximo.disabled = true;
    atualizarProgresso();
  }

  // Função para atualizar a barra de progresso
  function atualizarProgresso() {
    const porcentagem = ((indiceAtual) / perguntas.length) * 100;
    progressoEl.style.width = `${porcentagem}%`;
  }

  // Quando uma opção é escolhida, ativa o botão "Próximo"
  opcoesEl.addEventListener("change", () => {
    botaoProximo.disabled = false;
  });

  // Ao clicar em "Próximo", avança para a próxima pergunta ou mostra o resultado
  botaoProximo.addEventListener("click", () => {
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
    if (!opcaoSelecionada) return;

    respostas.push(opcaoSelecionada.value);
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  });

  // Função para exibir o resultado
  function mostrarResultado() {
    quizBox.style.display = "none";
    resultadoBox.style.display = "block";

    // Conta quantas vezes cada personagem combina com as respostas
    const pontuacoes = personagens.map(personagem => {
      let pontos = 0;
      respostas.forEach(resposta => {
        if (personagem.tags.includes(resposta)) {
          pontos++;
        }
      });
      return { personagem, pontos };
    });

    // Ordena do personagem com mais pontos para menos
    pontuacoes.sort((a, b) => b.pontos - a.pontos);

    const melhorCombina = pontuacoes[0].personagem;

    personagemNome.textContent = melhorCombina.nome;
    personagemImagem.src = melhorCombina.imagem;
    personagemImagem.alt = melhorCombina.nome;

    // Adiciona o botão de "Voltar à Página Inicial"
    botaoVoltar.textContent = "Voltar à Página Inicial";
    botaoVoltar.addEventListener("click", () => {
      window.location.href = "index.html"; // Aqui você coloca a URL da sua página inicial
    });

    resultadoBox.appendChild(botaoVoltar);
  }

  mostrarPergunta();
});
