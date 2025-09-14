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









