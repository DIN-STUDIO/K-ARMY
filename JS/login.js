const loginForm = document.querySelector("#loginform")
const loginMain = document.querySelector("#main")
const img1 = document.querySelector("img1")

function formHide(){
    loginForm.classList.add("hidden")
    loginMain.classList.remove("hidden")
}

function onSubmit(event){
    event.preventDefault()
    formHide()
}
loginForm.addEventListener("submit", onSubmit)