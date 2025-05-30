const toggle = document.querySelector('.toggle-mode');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');

  if (toggle.classList.contains('active')) {
    // Tema escuro (mais preto)
    document.body.style.background = 'linear-gradient(135deg, #0a0a0a, #b22222)';
    document.body.style.color = '#fff3f3';
  } else {
    // Tema padrão vermelho
    document.body.style.background = 'linear-gradient(135deg, #e2211c, #770000)';
    document.body.style.color = '#fff3f3';
  }
});
