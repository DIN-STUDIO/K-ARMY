const loginForm = document.querySelector("#loginform")
const img1 = document.querySelector("img1")

function formHide(){
    loginForm.classList.add("hidden")
}

function onSubmit(event){
    event.preventDefault()
    formHide()
}
loginForm.addEventListener("submit", onSubmit)