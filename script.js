// Mensagem de boas-vindas
window.addEventListener('load', () => {
  setTimeout(() => {
    alert('Bem-vindo! Explore e aprenda sobre linguagens de programação 🎉');
  }, 800);
});

// Curiosidades para mostrar no botão fixo
const curiosidades = [
  "A primeira linguagem foi criada nos anos 1950",
  "Python tem esse nome por causa de um grupo de comédia (Monty Python)",
  "Todo site que você acessa usa código por trás",
  "Você pode programar um robô real com Arduino ou Raspberry Pi!",
  "Programação está presente em carros, geladeiras e até brinquedos!"
];

const btnCuriosidadeFixo = document.getElementById('btn-curiosidade-fixo');
const curiosidadeAtiva = document.getElementById('curiosidade-ativa');
let indiceCuriosidade = 0;

btnCuriosidadeFixo.addEventListener('click', () => {
  curiosidadeAtiva.textContent = curiosidades[indiceCuriosidade];
  curiosidadeAtiva.classList.add('show');
  indiceCuriosidade++;
  if (indiceCuriosidade >= curiosidades.length) {
    indiceCuriosidade = 0;
  }
});

// Quiz
function responderQuiz(botao, certo) {
  const feedback = document.getElementById("quiz-feedback");
  if (certo) {
    feedback.textContent = "🎉 Acertou! Bluetooth é uma tecnologia, não uma linguagem.";
    feedback.style.color = "#90ee90";
  } else {
    feedback.textContent = "❌ Errado! Essa é uma linguagem sim. Tente de novo!";
    feedback.style.color = "#ff6961";
  }

  // Reaplica animação
  feedback.style.animation = 'none';
  void feedback.offsetWidth;
  feedback.style.animation = 'pulse 0.6s ease';
}

// Botão surpresa (de curiosidades rápidas)
function surpresa() {
  const frases = [
    "Você pode programar jogos usando apenas o navegador!",
    "Até foguetes usam código para voar 🚀",
    "Hackers éticos ajudam empresas a ficarem mais seguras!",
    "Existem linguagens que parecem com inglês simples!"
  ];
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("mensagem-surpresa").textContent = aleatoria;
}
