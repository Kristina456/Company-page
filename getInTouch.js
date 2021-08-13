const form = document.querySelector("#get-in-touch-form");
const divMessageSent = document.querySelector("#message-send")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('Message sent successfully')
    form.reset();
    divMessageSent.classList.remove('hide');
})