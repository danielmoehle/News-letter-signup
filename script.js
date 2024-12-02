var email = document.getElementById('email')
var button = document.getElementById("button")
var mainBox = document.getElementById("mainBox")
var thanksBox = document.getElementById("thanksBox")
var errorMessage = document.getElementById("display-none")
var dismissbutton = document.getElementById("dismissButton")

function validateEmail(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(emailValue);
}


button.addEventListener('click', function() {
    if (validateEmail(email.value)) {
    mainBox.style.display = 'none'
    thanksBox.style.display = "block"
    } else {
        email.style.backgroundColor = "rgb(250, 178, 178)"
        email.style.borderRadius = "3px"
        email.style.border = "solid 1px red"
        errorMessage.style.display = "block"

    }
})

dismissbutton.addEventListener('click', function() {
    window.location.reload()
})