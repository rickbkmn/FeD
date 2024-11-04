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

    const imgElement = document.getElementById('kokos-info');


    if(document.getElementById('over')) {
        document.getElementById('over').addEventListener('click', function() {
        displayKokosInfo('over')
    });
}

if(document.getElementById('ingredienten')) {
    document.getElementById('ingredienten').addEventListener('click', function() {
        displayKokosInfo('ingredienten')
    });
}

if(document.getElementById('voedingswaarde')) {
    document.getElementById('voedingswaarde').addEventListener('click', function() {
        displayKokosInfo('voedingswaarde')
    });
}

if(document.getElementById('duurzaamheid')) {
    document.getElementById('duurzaamheid').addEventListener('click', function() {
        displayKokosInfo('duurzaamheid');
    });
}

    function displayKokosInfo(type) {
        console.log(type)

        
        document.getElementById('hidden-content--over').classList.add('hidden')

        document.getElementById('hidden-content--ingredienten').classList.add('hidden')

        document.getElementById('hidden-content--voedingswaarde').classList.add('hidden')

        document.getElementById('hidden-content--duurzaamheid').classList.add('hidden')

        switch (type) {
            case 'over': {
                document.getElementById('hidden-content--over').classList.remove('hidden')
                break;
            }
            case 'ingredienten': {
                document.getElementById('hidden-content--ingredienten').classList.remove('hidden')
                break;
            }
            case 'voedingswaarde': {
                document.getElementById('hidden-content--voedingswaarde').classList.remove('hidden')
                break;
            }
            case 'duurzaamheid': {
                document.getElementById('hidden-content--duurzaamheid').classList.remove('hidden')
                break;
            }
        }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

      const img = document.getElementById('scroll-img');

      function handleScroll() {
          const scrollPosition = window.scrollY; 

          const rotateValue = scrollPosition / 100; 

          const translateYValue = scrollPosition / -5; 

          img.style.transform = `rotate(${rotateValue}deg) translateY(${translateYValue}px)`;
      }
      
      window.addEventListener('scroll', handleScroll);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

if(document.querySelector('.kokosslider')) {
const slider = document.querySelector('.kokosslider');
const images = document.querySelectorAll('.kokosslider img');


function updateActiveImage() {
    let closestImage = null;
    let closestDistance = Infinity;

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const distanceToCenter = Math.abs(rect.left + rect.width / 2- window.innerWidth / 2);

        if (distanceToCenter < closestDistance) {
            closestDistance = distanceToCenter;
            closestImage = img;
        }
    });

    images.forEach((img) => img.classList.remove('active')); // Verwijder active van alle afbeeldingen
    if (closestImage) closestImage.classList.add('active'); // Voeg active toe aan de dichtstbijzijnde afbeelding
}

// Eventlistener om te controleren tijdens het scrollen welke active is
slider.addEventListener('scroll', updateActiveImage);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let headerShown = false; //menu staat standaard uit en wordt verplaatst als je op de nav-ribbon klikt

function showHeader() {
    const header = document.querySelector('header');
    if(!headerShown) {
        header.style.top = 0;
        headerShown = !headerShown
    } else {
        header.style.top = '-20em';
        headerShown = !headerShown
    }

}

document.getElementById('nav-ribbon').addEventListener('click', () => showHeader())
