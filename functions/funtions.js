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