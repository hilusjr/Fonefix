const elements = document.querySelectorAll(".slide-right")

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "slideInToRight .4s ease-out .4s forwards"
        } else {
            entry.target.style.animation = "none"
        }
    })

})

elements.forEach(element => {
    observer.observe(element)
})