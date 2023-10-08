function backWhiteIn() {
    $('.header').css('background', 'white')
}

function backWhiteOut() {
    $('.header').css('background', 'transparent')
}

function categoriesIn(x) {
    $(x).css('display' ,'block')
    $('.secondary').css('display' ,'block')
    $('.third').css('display' ,'block')
}

function categoriesOut(x) {
    $(x).css('display' ,'none')
}

function subClose() {
    $('.secondary').css('display' ,'none')
    $('.third').css('display' ,'none')
}

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header")
    header.classList.toggle('scrolling', window.scrollY > 1080)
})