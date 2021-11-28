// ==UserScript==
// @name         Pilotize
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Grease/Tampermonkey script to standardise website units like mph to kts for pilots
// @author       LM
// @match        https://www.vansaircraft.com/*
// @match        https://avcom.co.za/*
// @match        https://vansairforce.net/*
// @match        https://www.zenithair.net/*
// @match        https://savannah-aircraft.co.za/*
// @match        https://www.jmbaircraft.com/*
// @match        https://mooneyspace.com/*
// @match        https://www.tecnam.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==


function MphToKts(child) {
    child.innerHTML = child.innerHTML.replace(/[0-9]+[ ]?(mph|MPH)/g, (match) => {
        const num = parseFloat(match.match(/[0-9]+/)[0]);
        const kts = Math.round(num * 0.868976);
        return `${kts} kts`;
    });
}

function KphToKts(child) {
    child.innerHTML = child.innerHTML.replace(/[0-9]+[ ]?(kph|km\/h|KPH)/g, (match) => {
        const num = parseFloat(match.match(/[0-9]+/)[0]);
        const kts = Math.round(num * 0.539957);
        return `${kts} kts`;
    });
}

(function () {
    'use strict';

    for (const child of document.body.children) {
        MphToKts(child);
        KphToKts(child);
    }
})();