const slideRightElements = document.querySelectorAll(".slide-right, .slide-left")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.addEventListener("scroll", () => {
                slideRightElements.forEach(element => {
                    const direction = element.className.slice(6)
                    let amount = window.pageYOffset - element.offsetTop / 1.15
                    if (direction == "left") {
                        amount *= -1
                    }
                    if (window.pageYOffset > element.offsetTop / 1.15) {
                        element.style.transform = `translateX(${amount}px)`
                    }
                    // console.log(element.offsetTop)
                    // console.log(window.pageYOffset)
                    // console.log(element.getBoundingClientRect().top)
                    // console.log(amount)
                })
            })
        } else {
            // entry.style.marginLeft = "0"
        }
    })
})

slideRightElements.forEach(slideRightElement => {
    observer.observe(slideRightElement)
})







// 

// document.addEventListener("scroll", () => {
//     slideRightElements.forEach(element => {
//         const amount = (element.offsetTop - element.getBoundingClientRect().top)
//         element.style.paddingLeft = `${amount}px`
//     })
// })