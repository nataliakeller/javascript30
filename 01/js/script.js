var boom = new Audio('./sounds/boom.wav')
var clap = new Audio('./sounds/clap.wav')
var hihat = new Audio('./sounds/hihat.wav')
var kick = new Audio('./sounds/kick.wav')
var openhat = new Audio('./sounds/openhat.wav')
var ride = new Audio('./sounds/ride.wav')
var snare = new Audio('./sounds/snare.wav')
var tink = new Audio('./sounds/tink.wav')
var tom = new Audio('./sounds/tom.wav')


function keyCode(event) {

    var x = event.keyCode;
    if (x == 65) {
        document.getElementById('msg').innerHTML = 'letra a'
        boom.play()
    } else if (x == 83) {
        document.getElementById('msg').innerHTML = 'letra s'
        clap.play()
    } else if (x == 68) {
        document.getElementById('msg').innerHTML = 'letra d'
        hihat.play()
    } else if (x == 70) {
        document.getElementById('msg').innerHTML = 'letra f'
        kick.play()
    } else if (x == 71) {
        document.getElementById('msg').innerHTML = 'letra g'
        openhat.play()
    } else if (x == 72) {
        document.getElementById('msg').innerHTML = 'letra h'
        ride.play()
    } else if (x == 74) {
        document.getElementById('msg').innerHTML = 'letra j'
        snare.play()
    } else if (x == 75) {
        document.getElementById('msg').innerHTML = 'letra k'
        tink.play()
    } else if (x == 76) {
        document.getElementById('msg').innerHTML = 'letra l'
        tom.play()
    }
}