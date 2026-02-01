// Открытие приглашения
document.getElementById('envelope').onclick = 
document.getElementById('openBtn').onclick = function() {
  document.getElementById('envelopeScreen').classList.add('hidden');
  document.getElementById('invitation').classList.add('visible');
  startHearts();
};

// Сердечки
function createHeart() {
  const h = document.createElement('div');
  h.className = 'heart-fall';
  h.textContent = '♡';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = (12 + Math.random() * 16) + 's';
  h.style.animationDelay = Math.random() * 5 + 's';
  document.getElementById('hearts').appendChild(h);
  setTimeout(() => h.remove(), 30000);
}

function startHearts() {
  setInterval(() => Math.random() > 0.3 && createHeart(), 600);
  for(let i = 0; i < 18; i++) setTimeout(createHeart, i * 220);
}