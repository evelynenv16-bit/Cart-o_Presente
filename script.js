// --- EFEITO DE BRILHOS QUADRADINHOS NO MOUSE ---

// Cores neon que combinam com o seu site (rosa, roxo, azul ciano, amarelo e verde)
const coresBrilho = ['#d946ef', '#a855f7', '#38bdf8', '#facc15', '#4ade80', '#f472b6'];

document.addEventListener('mousemove', (evento) => {
  // Cria um novo quadradinho
  const brilho = document.createElement('div');
  brilho.classList.add('particula-pixel');

  // Tamanho aleatório entre 6px e 12px
  const tamanho = Math.floor(Math.random() * 7) + 6;
  brilho.style.width = `${tamanho}px`;
  brilho.style.height = `${tamanho}px`;

  // Escolhe uma cor aleatória da lista e coloca um brilho neon nela
  const cor = coresBrilho[Math.floor(Math.random() * coresBrilho.length)];
  brilho.style.backgroundColor = cor;
  brilho.style.boxShadow = `0 0 8px ${cor}`;

  // Posiciona exatamente onde o mouse está
  brilho.style.left = `${evento.clientX}px`;
  brilho.style.top = `${evento.clientY}px`;

  // Define uma direção aleatória para onde o quadradinho vai flutuar
  const destinoX = (Math.random() - 0.5) * 60; // espalha para esquerda ou direita
  const destinoY = (Math.random() * 40) + 15;  // cai levemente para baixo
  brilho.style.setProperty('--destino-x', `${destinoX}px`);
  brilho.style.setProperty('--destino-y', `${destinoY}px`);

  // Coloca o brilho na tela
  document.body.appendChild(brilho);

  // Remove o quadradinho depois de 0.8s para o site não ficar pesado
  setTimeout(() => {
    brilho.remove();
  }, 800);


  // --- CONTROLE DO BOTÃO PLAY E DA MÚSICA ---

const botaoPlay = document.getElementById('botaoPlay');

// 1. Quando clicar no Play na primeira página:
if (botaoPlay) {
  botaoPlay.addEventListener('click', () => {
    // Salva na memória que o botão Play foi apertado
    localStorage.setItem('tocarMusica', 'sim');
    // Vai para a segunda página
    window.location.href = 'surpresa.html';
  });
}

// 2. Quando a segunda página (surpresa.html) abrir:
const musica = document.getElementById('musicaFundo');

if (musica && localStorage.getItem('tocarMusica') === 'sim') {
  musica.volume = 0.5; // Volume em 50% para não assustar (vai de 0.0 a 1.0)
  
  musica.play().catch(() => {
    // Caso algum navegador bloqueie o autoplay, toca no primeiro clique dele na tela
    document.addEventListener('click', () => {
      musica.play();
    }, { once: true });
  });

  // Limpa o aviso para não tocar sozinho se ele recarregar a página depois
  localStorage.removeItem('tocarMusica');
}

});

