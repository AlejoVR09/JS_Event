const password = document.querySelector("#psw")
const message = document.querySelector("#message")

password.addEventListener("focus", () => {
message.style.display = "block"
})

password.addEventListener("blur", () => {
message.style.display = "none"
password.classList.remove("invalid")
})

password.addEventListener("keyup", (event) => {
    const passwordValue = password.value
    const lowercaseRegex = /[a-z]/
    const uppercaseRegex = /[A-Z]/
    const numberRegex = /[0-9]/

    console.log(event)
    
    let letter=document.querySelector("#letter")
    let capital=document.querySelector("#capital")
    let number=document.querySelector("#number")
    let length=document.querySelector("#length")

    if (lowercaseRegex.test(passwordValue)) {
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    } else {
        letter.classList.add('invalid')
    }

    if (uppercaseRegex.test(passwordValue)) {
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    } else {
        capital.classList.add('invalid')
    }

    if (numberRegex.test(passwordValue)) {
        number.classList.remove('invalid')
        number.classList.add('valid')
    } else {
        number.classList.add('invalid')
    }
    
    if (passwordValue.length >= 8) {
        length.classList.remove('invalid')
        length.classList.add('valid')
    } else {
        length.classList.add('invalid')
    }
})

