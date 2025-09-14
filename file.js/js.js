const button = document.querySelector(".buttonGt86")




function testimonial() {
    const inputTestimonial = document.getElementById("inputTestimonial")
    const inputValue = inputTestimonial.value
    if (inputValue.trim() === "") {
        // Se è vuoto, mostra l'alert "Noooo"
        alert("Noooo MI DISPIACE INSERISCI IL CAMPO DI INPUT GRAZIE");
    } else {
        // Se non è vuoto (quindi "pieno"), mostra l'alert "Ok"
        alert("Ok TESTIMONIL INVIATO");
        inputTestimonial.value = "";
    }
}
const scrollTopBtn = document.getElementById('scrollTopBtn');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});


scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

  
  const bottone = document.getElementById('bottoneCollaps');
  const sezione = document.getElementById('offerteDellaSettimana');
  

 
  bottone.addEventListener('click', function() {
    
    if (sezione.style.display === 'none' || sezione.style.display === '') {
     
      sezione.style.display = 'block';
    } else {
     
      sezione.style.display = 'none';
    }
  });



  const bottone2= document.getElementById('botton2');
  const sezioneWelcomeSummer = document.getElementById('welcomeSummer1');
  

 
  bottone2.addEventListener('click', function() {
    
    if (sezioneWelcomeSummer.style.display === 'none' || sezioneWelcomeSummer.style.display === '') {
     
        sezioneWelcomeSummer.style.display = 'block';
    } else {
     
        sezioneWelcomeSummer.style.display = 'none';
    }
  });













