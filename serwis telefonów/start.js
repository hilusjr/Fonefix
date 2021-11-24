const elementToTranslate = document.querySelector("#whatever") 

document.addEventListener("scroll", () => {
    let moveBy = elementToTranslate.getBoundingClientRect().top / 5
    console.log(moveBy)
    elementToTranslate.style.transform = `translateX(${moveBy}px)`
})