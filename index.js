import home from "./pages/home/home.js"
import sneakers from "./pages/sneakers/sneakers.js"

const main = document.querySelector('.main')

window.addEventListener("load", () => {
    main.appendChild(home())
})

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        switch(window.location.hash){
            case "":
                main.appendChild(home())
                break
            case "#sneakers":
                main.appendChild(sneakers())
                break
            default:
                main.appendChild(home())
        }
    })
}

{
    const tenis = document.querySelector('.tenis')
    if(window.location.hash == "") {
        tenis.setAttribute('onmouseover', 'backWhiteIn()')
        tenis.setAttribute('onmouseout', 'backWhiteOut()')
        document.querySelector('.sneakers').setAttribute('onmouseout', 'backWhiteOut()')
        window.addEventListener("scroll", () => {
            let header = document.querySelector('.header')
            header.classList.toggle('scrolling', window.scrollY > 990)
        })
    } else {
        $('.header').css('background', 'white')
        tenis.removeAttribute('onmouseover')
        tenis.removeAttribute('onmouseout')
        document.querySelector('.sneakers').removeAttribute('onmouseout')
    }
}
