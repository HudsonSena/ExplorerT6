//default import
import Controls from "./controls.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

//named import
import Timer from "./timer.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

import Sound from "./sounds.js"

const sound = Sound()

import Events from "./events.js"

Events({controls, timer, sound})

import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay } from "./elements.js"







