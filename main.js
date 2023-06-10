// Letras de la canción
    var songLyrics = "Siéntate y cuéntame, ¿qué pasará? ,     Tu mirada choca con la mía más de lo normal. Así que siéntate y cuéntame, ¿qué pasaráaaaa? Mano a mano la mirada"; // Reemplaza con las letras de tu canción

    // Elemento HTML para mostrar la letra
    var lyricElement = document.getElementById('lyric');

    // Función para mostrar la letra gradualmente
    function showLyricsGradually() {
      var lyricsArray = songLyrics.split('');
      var i = 0;

      var interval = setInterval(function() {
        if (i < lyricsArray.length) {
          lyricElement.innerHTML += lyricsArray[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, 150); // Intervalo de tiempo entre cada letra (en milisegundos)
    }

    // Reproducir la canción de fondo
    function playBackgroundMusic() {
      var audio = new Audio('bhavi.mp3'); // Reemplaza con la ruta a tu canción
      audio.loop = true;
      audio.play();
    }

    // Obtener referencia al botón y agregar controlador de eventos
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        playBackgroundMusic();
        setTimeout(function() {
        showLyricsGradually();
      }, 4000); // Esperar 1 segundo antes de iniciar la música y la letra
      playButton.disabled = true; // Deshabilitar el botón después de hacer clic
    });