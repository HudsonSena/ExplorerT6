import {
    btnPlay, btnStop, btnPlus, btnMinus, btnCardForest, btnCardRain, btnCardCoffee, btnCardFire, displayMinutes, displaySeconds
} from "./elements.js"

import Sound from "./sounds.js"
const sound = Sound()

import Controls from "./controls.js"
const controls = Controls({
    btnPlay, btnStop, btnPlus, btnMinus,
    btnCardCoffee, btnCardFire, btnCardForest, btnCardRain
})

import Timer from "./timer.js"
const timer = Timer({
    displayMinutes,
    displaySeconds
})

import Events from "./events.js"
Events({ sound, controls, timer})