import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'


export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() { 
    state.isRunning = false
    state.minutes = 25
    document.documentElement.classList.remove('running') 
    
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function addTimer () {
    timer.addFiveMinutes()
    sounds.buttonPressAudio.play()

}

export function removeTimer () {
    timer.removeFiveMinutes()
    sounds.buttonPressAudio.play()
}

export function toggleMusic(clickedButton) {
    let audioToplay = null;

    if(clickedButton.id == 'forestSound'){
        audioToplay = sounds.forestSound
    }

    if(clickedButton.id == 'rainSound'){
        audioToplay = sounds.rainSound
    }

    if(clickedButton.id == 'coffeeSound'){
        audioToplay = sounds.coffeeSound
    }

    if(clickedButton.id == 'fireSound'){
        audioToplay = sounds.fireSound
    }

    const allSounds = 
    [sounds.forestSound, sounds.rainSound, sounds.coffeeSound, sounds.fireSound];

    allSounds.forEach(sound => {
        if (sound !== audioToplay) { 
            sound.pause();
        }
    });

    if (audioToplay.paused) {
        audioToplay.play();
        clickedButton.classList.add('playing');
    } else {
        audioToplay.pause();
        clickedButton.classList.remove('playing');
    }
}