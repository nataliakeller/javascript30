var boom = new Audio('./sounds/boom.wav')
var clap = new Audio('./sounds/clap.wav')
var hihat = new Audio('./sounds/hihat.wav')
var kick = new Audio('./sounds/kick.wav')
var openhat = new Audio('./sounds/openhat.wav')
var ride = new Audio('./sounds/ride.wav')
var snare = new Audio('./sounds/snare.wav')
var tink = new Audio('./sounds/tink.wav')
var tom = new Audio('./sounds/tom.wav')

function tocar(event) {
    var x = event.keyCode;
    
    switch(x) {
        case 65:
            boom.currentTime = 0;
            boom.play()
            var playing = document.getElementById('boom')
            playing.classList.add('playing')
            break;
        case 83:
            clap.currentTime = 0;
            clap.play()
            var playing = document.getElementById('clap')
            playing.classList.add('playing')
            break;
        case 68:
            hihat.currentTime = 0;
            hihat.play()
            var playing = document.getElementById('hihat')
            playing.classList.add('playing')
            break;
        case 70:
            kick.currentTime = 0;
            kick.play()
            var playing = document.getElementById('kick')
            playing.classList.add('playing')
            break;
        case 71:
            openhat.currentTime = 0;
            openhat.play()
            var playing = document.getElementById('openhat')
            playing.classList.add('playing')
            break;
        case 72:
            ride.currentTime = 0;
            ride.play()
            var playing = document.getElementById('ride')
            playing.classList.add('playing')
            break;
        case 74:
            snare.currentTime = 0;
            snare.play()    
            var playing = document.getElementById('snare')
            playing.classList.add('playing')
            break;
        case 75:
            tink.currentTime = 0;
            tink.play()
            var playing = document.getElementById('tink')
            playing.classList.add('playing')
            break;
        case 76:
            tom.currentTime = 0;
            tom.play()    
            var playing = document.getElementById('tom')
            playing.classList.add('playing')
            break;
    }


}

const keys = Array.from(document.querySelectorAll('.input'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  //seleciona em um array cada div input e adiciona um event listener do transition end e remove a transição
  //quando ela termina

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  } // função para remover a classe playing