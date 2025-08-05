// Mensagem de boas-vindas
window.addEventListener('load', () => {
  setTimeout(() => {
    alert('Bem-vindo! Explore e aprenda sobre linguagens de programação 🎉');
  }, 800);
});

// Mostrar/ocultar curiosidades extras com animação
const botao = document.getElementById('btn-curiosidade');
const extra = document.getElementById('extra-curiosidade');

botao.addEventListener('click', () => {
  extra.classList.toggle('show');
  botao.textContent = extra.classList.contains('show')
    ? 'Ocultar curiosidades'
    : 'Mostrar mais curiosidades';
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

// Botão surpresa
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