

  fetch('https://hectorjaviermorenoh.github.io/comandosJavaScript/frases.json')
  .then(response => response.json())
  .then(data => {
    console.log("informacion Json", data)
    const carousel = document.querySelector('.carousel');
    data.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `
        <div class="english">${item.english}</div>
        <div class="spanish">
          ${item.spanish}
          <div class="pronunciation">${item.pronunciation}</div>
          <button onclick="speak(\`${item.description}\`)">🔊 Escuchar</button>
        </div>
      `;
      carousel.appendChild(slide);
    });
  });




  function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'es-CO';
    window.speechSynthesis.speak(msg);
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.log('Error al registrar Service Worker', err));
  }







