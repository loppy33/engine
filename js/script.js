$('.mouse-parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.mouse-parallax__background').css(
        'transform',
        'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
    );

});

let hanburger = document.getElementById("hanburger")
let btns = document.getElementById("btns")

let guildsButton = document.getElementById('guildsButton')
let guilds = document.getElementById('guilds')

let container = document.getElementById('container')
let avatar = document.getElementById('avatar')
let block = document.getElementById('block')

let back = document.getElementById('back')

let background = document.getElementById('background')

hanburger.onclick = function () {

    if (btns.style.transform == 'translate(0%, -70%)')
        btns.style.transform = 'translate(0%, -100%)'
    else {
        btns.style.transform = 'translate(0%, -70%)'
    }
}

guildsButton.onclick = function () {
    removeCards()
}

function removeCards() {
    setTimeout(function () {
        container.style.opacity = '0'
        btns.style.opacity = '0'
        avatar.style.opacity = '0'
        block.style.opacity = '0'
    }, 0)

    guilds.style.display = 'block'
    setTimeout(function () {
        guilds.style.opacity = '1'
    }, 0)
}

back.onclick = function () {
    moveCards()
}

function moveCards() {
    btns.style.display = 'block'
    container.style.display = 'block'
    avatar.style.display = 'block'
    block.style.display = 'block'

    setTimeout(function () {
        container.style.opacity = '1'
        btns.style.opacity = '1'
        avatar.style.opacity = '1'
        block.style.opacity = '1'
    }, 0)


    guilds.style.display = 'none'
    setTimeout(function () {
        guilds.style.opacity = '0'
    }, 0)
}

function changeBackground() {
    random = Math.floor(Math.random() * 5) + 1
    background.style.backgroundImage = 'url("../img/' + random + '.png")'
}
changeBackground()


function Interval() {
    myInterval =
        setInterval(() => {
            changeBackground()
        }, 15 * 1000)
}
Interval()