import state from './state.js'
import * as el from './elements.js'
import { reset } from './action.js'
import { kitchenTimer } from './sounds.js'


export function countdown() {
    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }


    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdown = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    
    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function addFiveMinutes () {
    if(state.minutes >= 60) {
        state.minutes = 60
        return
    }

    state.minutes = state.minutes + 5
    minutes.textContent = String(state.minutes).padStart(2, "0")
}

export function removeFiveMinutes () {
    if (state.minutes <= 0) {
        return; 
    }

    if (state.minutes >= 60) {
        state.minutes = 60;
        return;
    }

    state.minutes = Math.max(0, state.minutes - 5); 
    minutes.textContent = String(state.minutes).padStart(2, "0");
}