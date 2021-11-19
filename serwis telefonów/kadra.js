const containers = document.querySelectorAll(".employee-container")
    // ITEMS
const avatar = document.querySelectorAll(".employee-card img")
const employeeName = document.querySelectorAll(".employee-card h1")
const employementTime = document.querySelectorAll(".empTime")
const employeeDesc = document.querySelectorAll(".empDesc")


containers.forEach(container => {
    container.addEventListener("mousemove", (e) => {
        const card = document.querySelector(".employee-card")
        let xAxis = e.pageX * 0.02
        let yAxis = ((card.style.height / 2) + 10) - (e.pageY - document.querySelector(".employees-container").offsetTop) / 10
        card.style.transition = "0";
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`
    })
})

// Animation in
container.addEventListener("mouseenter", (e) => {
    // console.log(e.target.id)
    card.style.transition = "none";

    avatar.style.transform = "translateZ(75px)"
    employeeName.style.transform = "translateZ(100px)"
    employementTime.style.transform = "translateZ(75px)"
    employeeDesc.style.transform = "translateZ(50px)"
});

// Animation out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    avatar.style.transform = "translateZ(0px)"
    employeeName.style.transform = "translateZ(0px)"
    employementTime.style.transform = "translateZ(0px)"
    employeeDesc.style.transform = "translateZ(0px)"
})