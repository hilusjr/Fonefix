const navbar = document.querySelector(".navbar")
const navbarButtons = document.querySelectorAll(".flex-container div")
const navbarButton = document.querySelector(".flex-container > div:nth-child(7)")
const menuButton = document.querySelector(".nav-btn")
const logo = document.querySelector(".logo")

function setMenuButton() {
    if (window.innerWidth <= 768) {
        menuButton.style.display = "block"
    } else {
        menuButton.style.display = "none"
    }
}


// SCROLL TO ELEMENT
navbarButtons.forEach((button) => {
    const buttonText = button.textContent
    button.addEventListener("click", () => {
        const element = document.querySelector(`.${buttonText}-container`)
        scrollTo(0, element.offsetTop - window.innerHeight / 12.5)
        if (menuButton.style.display == "block") toggleMenu()
        console.log(menuButton.style.display)
    })
})

// MOBILE MENU TOGGLE
menuButton.addEventListener("click", () => {
    toggleMenu()
})

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        navbar.style.height = "8vmax"
        menuButton.style.display = "block"
        navbarButtons.forEach(element => {
            element.style.display = "none"
        })
    } else {
        navbar.style.height = "8vmin"
        menuButton.style.display = "none"
        navbarButtons.forEach(element => {
            element.style.display = "block"
        })
    }
    logo.style.display = "block"
})


function toggleMenu() {
    if (navbarButton.style.display == "none") {
        navbar.style.height = "50vmax"
        navbarButtons.forEach(element => {
            element.style.display = "block"
        })
    } else {
        navbar.style.height = "8vmax"
        navbarButtons.forEach(element => {
            element.style.display = "none"
        })
        logo.style.display = "block"
    }
}