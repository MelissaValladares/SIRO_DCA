document.addEventListener("DOMContentLoaded", function() {
  const data = {
      basicas: ["Comida", "Agua", "Baño", "Médico", "Descanso", "Lavar manos", "Cambio actividad", "Silencio", "Ayuda", "Calor", "Frío"],
      emociones: ["Feliz", "Triste", "Enojado", "Sorprendido", "Ansioso", "Cansado", "Confundido", "Asustado", "Aburrido", "Interés", "Cariño", "Pena"],
      escolar: ["Libro", "Pizarrón", "Mochila", "Lápiz", ""]
  };

  function tarjeta(item, index, categoria) {
      const div = document.createElement('div');
      div.className = 'col-sm-3 p-3';

      const cardDiv = document.createElement('div');
      cardDiv.className = 'card shadow';

      const cardHeaderDiv = document.createElement('div');
      cardHeaderDiv.className = 'card-header';

      const imgDiv = document.createElement('div');
      imgDiv.className = 'mx-auto centrar';

      const img = document.createElement('img');
      img.id = `audio-button-${categoria}-${index}`;
      img.src = `img/${item}.jpg`;
      img.alt = `Botón de Audio ${item}`;
      img.className = 'audio-button';
      img.style.cursor = 'pointer';

      const audio = document.createElement('audio');
      audio.id = `audio-${categoria}-${index}`;
      audio.src = `audio/${item}.mp3`;

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body mx-auto';
      cardBodyDiv.textContent = item.charAt(0).toUpperCase() + item.slice(1);

      img.addEventListener('click', function() {
          audio.play();
      });

      imgDiv.appendChild(img);
      imgDiv.appendChild(audio);
      cardHeaderDiv.appendChild(imgDiv);
      cardDiv.appendChild(cardHeaderDiv);
      cardDiv.appendChild(cardBodyDiv);
      div.appendChild(cardDiv);
      return div;
  }

  document.querySelectorAll('.tabcontent').forEach(tab => {
      const categoria = tab.getAttribute('data-category');
      const items = data[categoria];
      const cardContainer = tab.querySelector('.card-container');

      items.forEach((item, index) => {
          const card = tarjeta(item, index, categoria);
          cardContainer.appendChild(card);
      });
  });
});