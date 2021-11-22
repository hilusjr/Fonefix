const navbarButtons = document.querySelectorAll(".flex-container div")

navbarButtons.forEach(button => {
    const buttonText = button.textContent
    button.addEventListener("click", () => {
        document.querySelector("." + buttonText + "-container").scrollIntoView()
    })
})