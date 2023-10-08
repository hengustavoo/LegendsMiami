function backWhiteIn() {
    $('.header').css('background', 'white')
}

function backWhiteOut() {
    $('.header').css('background', 'transparent')
}

function categoriesIn(x) {
    $(x).css('display' ,'flex')
    $('.secondary').css('display' ,'flex')
}

function categoriesOut(x) {
    $(x).css('display' ,'none')
}

function subClose() {
    $('.secondary').css('display' ,'none')
}

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header")
    header.classList.toggle('scrolling', window.scrollY > 1080)
})