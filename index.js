window.addEventListener("scroll", () => {
    let header = document.querySelector('.header')
    let img = $('.banner').height()
    header.classList.toggle('scrolling', window.scrollY > img)
})

function backWhiteIn() {
    $('.header').css('background', 'white')
}

function backWhiteOut() {
    $('.header').css('background', 'transparent')
}

function subClose() {
    $('.secondary').css('display' ,'none')
}

function visible(x) {
    const divs = document.querySelectorAll('.sub')
    const div = document.querySelector(x)
    divs.forEach(e => {
        if (e.classList.contains('visible') == true) e.classList.remove('visible')
    })
    $('.secondary').css('display' ,'flex')
    div.classList.add('visible')
}