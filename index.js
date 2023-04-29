'use strict'

let body = document.querySelector('body');



let onceKeys = document.querySelectorAll('.once');
let twiceKeys = document.querySelectorAll('.twice');
let spaceKey = document.querySelector('.space');
let keys = [...onceKeys, ...twiceKeys, spaceKey];




function createElement(element, className, innerContent) {
    let elem = document.createElement(element);
    if (className) elem.className = className;
    if (innerContent != undefined) elem.innerHTML = `${innerContent}`;
    return elem;
}



let keysRow1Specials = [["Backquote", "~"], ["Digit1", "!"], ["Digit2", "@"], ["Digit3", "#"], ["Digit4", "$"], ["Digit5", "%"], ["Digit6", "^"], ["Digit7", "&"], ["Digit8", "*"], ["Digit9", "("], ["Digit0", ")"], ["Minus", "_"], ["Equal", "+"], ["Backspace", "Backspace"]];
let keysRow1En = [["Backquote", "`"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "Backspace"]];
let keysRow1Ru = [["Backquote", "ё"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "Backspace"]];
let keysRow2En = [["Tab", "Tab"], ["KeyQ", "q"], ["KeyW", "w"], ["KeyE", "e"], ["KeyR", "r"], ["KeyT", "t"], ["KeyY", "y"], ["KeyU", "u"], ["KeyI", "i"], ["KeyO", "o"], ["KeyP", "p"], ["BracketLeft", "["], ["BracketRight", "]"], ["Backslash", "\\"], ["Delete", "Delete"]];
let keysRow2Ru = [["Tab", "Tab"], ["KeyQ", "й"], ["KeyW", "ц"], ["KeyE", "у"], ["KeyR", "к"], ["KeyT", "е"], ["KeyY", "н"], ["KeyU", "г"], ["KeyI", "ш"], ["KeyO", "щ"], ["KeyP", "з"], ["BracketLeft", "х"], ["BracketRight", "ъ"], ["Backslash", "\\"], ["Delete", "Delete"]];
let keysRow3En = [["CapsLock", "CapsLock"], ["KeyA", "a"], ["KeyS", "s"], ["KeyD", "d"], ["KeyF", "f"], ["KeyG", "g"], ["KeyH", "h"], ["KeyJ", "j"], ["KeyK", "k"], ["KeyL", "l"], ["Semicolon", ";"], ["Quote", "'"], ["Enter", "Enter"]]
let keysRow3EnSpecials = [["CapsLock", "CapsLock"], ["KeyA", "a"], ["KeyS", "s"], ["KeyD", "d"], ["KeyF", "f"], ["KeyG", "g"], ["KeyH", "h"], ["KeyJ", "j"], ["KeyK", "k"], ["KeyL", "l"], ["Semicolon", ":"], ["Quote", '"'], ["Enter", "Enter"]]
let keysRow3Ru = [["CapsLock", "CapsLock"], ["KeyA", "ф"], ["KeyS", "ы"], ["KeyD", "в"], ["KeyF", "а"], ["KeyG", "п"], ["KeyH", "р"], ["KeyJ", "о"], ["KeyK", "л"], ["KeyL", "д"], ["Semicolon", ";"], ["Quote", "'"], ["Enter", "Enter"]]
let keysRow4En = [["ShiftLeft", "Shift"], ["KeyZ", "z"], ["KeyX", "x"], ["KeyC", "c"], ["KeyV", "v"], ["KeyB", "b"], ["KeyN", "n"], ["KeyM", "m"], ["Comma", ","], ["Period", "."], ["Slash", "/"], ["ArrowUp", "ArrowUp"], ["ShiftRight", "Shift"]];
let keysRow4Specials = [["ShiftLeft", "Shift"], ["KeyZ", "z"], ["KeyX", "x"], ["KeyC", "c"], ["KeyV", "v"], ["KeyB", "b"], ["KeyN", "n"], ["KeyM", "m"], ["Comma", "<"], ["Period", ">"], ["Slash", "?"], ["ArrowUp", "ArrowUp"], ["ShiftRight", "Shift"]];
let keysRow4Ru = [["ShiftLeft", "Shift"], ["KeyZ", "я"], ["KeyX", "ч"], ["KeyC", "с"], ["KeyV", "м"], ["KeyB", "и"], ["KeyN", "т"], ["KeyM", "ь"], ["Comma", ","], ["Period", "."], ["Slash", "/"], ["ArrowUp", "ArrowUp"], ["ShiftRight", "Shift"]];
let keysRow5En = [["ControlLeft", "Control"], ["MetaLeft", "Meta"], ["AltLeft", "Alt"], ["Space", " "], ["AltRight", "Alt"], ["ControlRight", "Control"], ["ArrowLeft", "ArrowLeft"], ["ArrowDown", "ArrowDown"], ["ArrowRight", "ArrowRight"]];

// let keysRow1 = [[]]


let arrEn = [keysRow1En, keysRow2En, keysRow3En, keysRow4En, keysRow5En];
let arrRu = [keysRow1Ru, keysRow2Ru, keysRow3Ru, keysRow4Ru, keysRow5En];
let arrRuSpecials = [keysRow1Specials, keysRow2Ru, keysRow3Ru, keysRow4Ru, keysRow5En];
let arrEnSpecials = [keysRow1Specials, keysRow2En, keysRow3EnSpecials, keysRow4Specials, keysRow5En];

let isEngLang = false;

function generateKeyboard(arr) {
    if (document.querySelector('.container')) document.querySelector('.container').remove();
    const container = createElement('div', 'container');
    body.appendChild(container)
    arr.forEach((el, i) => {
        let rowElem = createElement('div', 'row');
        el.forEach(el => {
            let keyElem = createElement('div', 'once')

            switch (el[1]) {

                case "Backspace":
                    keyElem.innerHTML = `${el[1]}`
                    keyElem.className = `twice ${el[0]}`

                    break;
                case "CapsLock":
                    keyElem.innerHTML = `${el[1]}`
                    keyElem.className = `twice ${el[0]}`
                    break;
                case "Enter":
                    keyElem.innerHTML = `${el[1]}`
                    keyElem.className = `twice ${el[0]}`
                    break;
                case "Shift":
                    keyElem.innerHTML = `${el[1]}`
                    keyElem.className = `twice ${el[0]}`
                    break;
                case " ":
                    keyElem.innerHTML = `Space`
                    keyElem.className = `space ${el[0]}`
                    break;

                default:
                    keyElem.innerHTML = `${el[1]}`
                    keyElem.className = `once ${el[0]}`

                    break;
            }

            rowElem.appendChild(keyElem)
        })

        container.appendChild(rowElem);

    })

    onceKeys = document.querySelectorAll('.once');
    twiceKeys = document.querySelectorAll('.twice');
    spaceKey = document.querySelector('.space');
    keys = [...onceKeys, ...twiceKeys, spaceKey];
}

generateKeyboard(arrEn)

let a = []
addEventListener('keydown', (e) => {
    console.log(e.key, e.code, e);


    if (e.altKey && e.shiftKey) {
        if (isEngLang) {
            generateKeyboard(arrRu)
            isEngLang = !isEngLang;
        }
        else {
            generateKeyboard(arrEn)
            isEngLang = !isEngLang;
        }
    }

    if (e.shiftKey) {
        if (isEngLang) generateKeyboard(arrRuSpecials)
        else generateKeyboard(arrEnSpecials);
    }
    keys.forEach(el => {
        let elClass = el.className;
        if (e.shiftKey && (elClass.includes('Key', 'BracketRight'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('BracketRight'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Backquote'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('BracketLeft'))) el.innerText = el.innerText.toUpperCase();
        else if (el.classList.contains(`${e.code}`)) el.classList.add('on');

    })
})
addEventListener('keyup', (e) => {
    console.log(e.getModifierState('CapsLock'));

    if (isEngLang) generateKeyboard(arrRu)
    else generateKeyboard(arrEn);

    keys.forEach(el => {
        let elClass = el.className;
        console.log(elClass.includes('Key'));

        if (elClass.includes('Key', 'BracketRight')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('BracketRight')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Backquote')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('BracketLeft')) el.innerText = el.innerText.toLowerCase();
        if (el.classList.contains(`${e.code}`)) el.classList.remove('on');

    })
})
