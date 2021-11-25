const navbarButtons = document.querySelectorAll(".flex-container div")

navbarButtons.forEach(button => {
    const buttonText = button.textContent
    button.addEventListener("click", () => {
        const element = document.querySelector("." + buttonText + "-container")
        console.log(window.innerHeight / 8)
        scrollTo(0, element.offsetTop - (window.innerHeight / 12.5))
    })
})