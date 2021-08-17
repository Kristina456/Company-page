const form = document.querySelector("#js-form");
const divMessageSent = document.querySelector("#js-send-message")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('Message sent successfully')
    form.reset();
    divMessageSent.classList.remove('hide');
})