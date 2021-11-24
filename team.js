const containers = document.querySelectorAll(".employee-container")
const horizontalAnimationStrength = 10
const verticalAnimationStrength = 5

containers.forEach(container => {
    const employeeContainers = container.parentElement
    const card = container.firstElementChild
    const avatar = card.querySelector("img")
    const employeeName = card.querySelector(".employee-card h1")
    const employementTime = card.querySelector(".empTime")
    const employeeDesc = card.querySelector(".empDesc")
    container.addEventListener("mousemove", (e) => {
        const element = container.getBoundingClientRect()
        const leftOffset = element.left
        const xAxis = -1 * ((leftOffset + card.offsetWidth / 2) - e.pageX) / horizontalAnimationStrength
            // get offset from the edge of viewport, add half of the width/height to set axis, 
            // substract current coordinate of the cursor
            // divide by any number to either soften or strengthen the animation
        const yAxis = ((employeeContainers.offsetTop + card.offsetHeight / 2) - e.pageY) / verticalAnimationStrength
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`
    })

    // Animation in
    container.addEventListener("mouseenter", () => {
        card.style.transition = "none"
        avatar.style.transform = "translateZ(100px)"
        employeeName.style.transform = "translateZ(100px)"
        employementTime.style.transform = "translateZ(85px)"
        employeeDesc.style.transform = "translateZ(75px)"
    })

    // Animation out
    container.addEventListener("mouseleave", () => {
        card.style.transition = "all 0.5s ease"
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
        avatar.style.transform = "translateZ(0px)"
        employeeName.style.transform = "translateZ(0px)"
        employementTime.style.transform = "translateZ(0px)"
        employeeDesc.style.transform = "translateZ(0px)"
    })
})