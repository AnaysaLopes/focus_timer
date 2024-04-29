import * as elements from "./elements.js";
import * as actions from './action.js'

export function registerControls () {
    elements.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}

export function clickOnSound() {
    elements.music.forEach(div => {
        div.addEventListener('click', () => {
            actions.toggleMusic(div)});
    });
}