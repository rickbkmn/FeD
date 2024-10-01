/* HULP VAN CHAT GPT GEHAD */
document.addEventListener('DOMContentLoaded', function () {
    const back2Top = document.getElementById('back2top');
    const clickSound = document.getElementById('clickSound');
    clickSound.loop = false; 

    if (back2Top && clickSound) {

        back2Top.addEventListener('click', function () {
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });

            setTimeout(function () {
                
                clickSound.currentTime = 0;
                
                clickSound.play();
            }, 200); 
        });
    } else {
        console.error("Het 'back2top' of 'clickSound' element kon niet worden gevonden.");
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Zoek het img-element
    const imgElement = document.getElementById('kokos-info');

    // Functie om het src-attribuut van het img-element te veranderen, met mapnaam 'image'
    function changeImage(imageName) {
        // Zet het pad als string, inclusief de 'image/' directory en het bestand
        imgElement.setAttribute('src', '../images/' + imageName + '.png');
    }

    // Event listeners voor de knoppen
    document.getElementById('over').addEventListener('click', function() {
        changeImage('over');
    });

    document.getElementById('ingredienten').addEventListener('click', function() {
        changeImage('ingredienten');
    });

    document.getElementById('voedingswaarde').addEventListener('click', function() {
        changeImage('voedingswaarde');
    });

    document.getElementById('duurzaamheid').addEventListener('click', function() {
        changeImage('duurzaamheid');
    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////

      const img = document.getElementById('scroll-img');

      function handleScroll() {
          const scrollPosition = window.scrollY; // Scroll-positie in pixels

          const rotateValue = scrollPosition / 100; // Verplaatsing rotatie

          const translateYValue = scrollPosition / -5; // Verplaatsing verticaal

          // Stel de transform in voor rotatie en verticaal verschuiven
          img.style.transform = `rotate(${rotateValue}deg) translateY(${translateYValue}px)`;
      }
      // Voeg de scroll-functie toe aan het scroll-event van het window
      window.addEventListener('scroll', handleScroll);



