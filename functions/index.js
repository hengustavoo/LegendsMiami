function backWhiteIn() {
    $('.header').css('background', 'white')
    // $('.secondary').css('display', 'none')
}

function backWhiteOut() {
    $('.header').css('background', 'transparent')
}

function subClose() {
    $('.secondary').css('display' ,'none')
}

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header")
    header.classList.toggle('scrolling', window.scrollY > 1080)
})

document.querySelector('.pri').addEventListener("onclick", () => {
    let divs = document.querySelectorAll('.pri')
    divs.forEach(e => {
        if (e.classList.contains('active') == true) {
            e.classList.remove('active')
        }
    })
    document.querySelector('pri').classList.add('active')
})

function visible(x) {
    const divs = document.querySelectorAll('.sub')
    const div = document.querySelector(x)
    divs.forEach(e => {
        if (e.classList.contains('visible') == true) e.classList.remove('visible')
    })
    $('.secondary').css('display' ,'flex')
    div.classList.add('visible')
}