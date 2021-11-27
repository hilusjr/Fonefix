const elements = document.querySelectorAll(".slide-right, .slide-down")

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.className == "slide-right") {
                entry.target.style.animation = "slideInToRight .4s ease-out .4s forwards"
            } else if (entry.target.className == "slide-down") {
                entry.target.style.animation = "slideInToBottom .4s ease-out .8s forwards"
            }
        } else {
            entry.target.style.animation = "none"
        }
    })

})

elements.forEach(element => {
    observer.observe(element)
})