'use strict'

let caps = false;

let body = document.querySelector('body');


let onceKeys = document.querySelectorAll('.once');
let twiceKeys = document.querySelectorAll('.twice');
let spaceKey = document.querySelector('.space');
let keys = [...onceKeys, ...twiceKeys, spaceKey];

let txtarea = document.querySelector('.textarea');

const container = createElement('div', 'container');
body.appendChild(container);

const textarea = createElement('textarea', 'textarea');
textarea.setAttribute('cols', '30');
textarea.setAttribute('rows', '10');

const attention = createElement('p', 'p', 'Alt + Shift: Switch Lang');

container.append(attention);
container.append(textarea);








function createElement(element, className, innerContent) {
    let elem = document.createElement(element);
    if (className) elem.className = className;
    if (innerContent != undefined) elem.innerHTML = `${innerContent}`;
    return elem;
}



let keysRow1Specials = [["Backquote", "~"], ["Digit1", "!"], ["Digit2", "@"], ["Digit3", "#"], ["Digit4", "$"], ["Digit5", "%"], ["Digit6", "^"], ["Digit7", "&"], ["Digit8", "*"], ["Digit9", "("], ["Digit0", ")"], ["Minus", "_"], ["Equal", "+"], ["Backspace", "Backspace"]];
let keysRow1RuSpecials = [["Backquote", "Ё"], ["Digit1", "!"], ["Digit2", "@"], ["Digit3", "#"], ["Digit4", "$"], ["Digit5", "%"], ["Digit6", "^"], ["Digit7", "&"], ["Digit8", "*"], ["Digit9", "("], ["Digit0", ")"], ["Minus", "_"], ["Equal", "+"], ["Backspace", "Backspace"]];
let keysRow1En = [["Backquote", "`"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "Backspace"]];
let keysRow1Ru = [["Backquote", "ё"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "Backspace"]];
let keysRow2En = [["Tab", "Tab"], ["KeyQ", "q"], ["KeyW", "w"], ["KeyE", "e"], ["KeyR", "r"], ["KeyT", "t"], ["KeyY", "y"], ["KeyU", "u"], ["KeyI", "i"], ["KeyO", "o"], ["KeyP", "p"], ["BracketLeft", "["], ["BracketRight", "]"], ["Backslash", "\\"], ["Delete", "Delete"]];
let keysRow2EnSpecials = [["Tab", "Tab"], ["KeyQ", "q"], ["KeyW", "w"], ["KeyE", "e"], ["KeyR", "r"], ["KeyT", "t"], ["KeyY", "y"], ["KeyU", "u"], ["KeyI", "i"], ["KeyO", "o"], ["KeyP", "p"], ["BracketLeft", "{"], ["BracketRight", "}"], ["Backslash", "|"], ["Delete", "Delete"]];
let keysRow2Ru = [["Tab", "Tab"], ["KeyQ", "й"], ["KeyW", "ц"], ["KeyE", "у"], ["KeyR", "к"], ["KeyT", "е"], ["KeyY", "н"], ["KeyU", "г"], ["KeyI", "ш"], ["KeyO", "щ"], ["KeyP", "з"], ["BracketLeft", "х"], ["BracketRight", "ъ"], ["Backslash", "/"], ["Delete", "Delete"]];
let keysRow2RuSpecials = [["Tab", "Tab"], ["KeyQ", "й"], ["KeyW", "ц"], ["KeyE", "у"], ["KeyR", "к"], ["KeyT", "е"], ["KeyY", "н"], ["KeyU", "г"], ["KeyI", "ш"], ["KeyO", "щ"], ["KeyP", "з"], ["BracketLeft", "х"], ["BracketRight", "ъ"], ["Backslash", "\\"], ["Delete", "Delete"]];
let keysRow3En = [["CapsLock", "CapsLock"], ["KeyA", "a"], ["KeyS", "s"], ["KeyD", "d"], ["KeyF", "f"], ["KeyG", "g"], ["KeyH", "h"], ["KeyJ", "j"], ["KeyK", "k"], ["KeyL", "l"], ["Semicolon", ";"], ["Quote", "'"], ["Enter", "Enter"]]
let keysRow3EnSpecials = [["CapsLock", "CapsLock"], ["KeyA", "a"], ["KeyS", "s"], ["KeyD", "d"], ["KeyF", "f"], ["KeyG", "g"], ["KeyH", "h"], ["KeyJ", "j"], ["KeyK", "k"], ["KeyL", "l"], ["Semicolon", ":"], ["Quote", '"'], ["Enter", "Enter"]]
let keysRow3Ru = [["CapsLock", "CapsLock"], ["KeyA", "ф"], ["KeyS", "ы"], ["KeyD", "в"], ["KeyF", "а"], ["KeyG", "п"], ["KeyH", "р"], ["KeyJ", "о"], ["KeyK", "л"], ["KeyL", "д"], ["Semicolon", "ж"], ["Quote", "э"], ["Enter", "Enter"]]
let keysRow4En = [["ShiftLeft", "Shift"], ["KeyZ", "z"], ["KeyX", "x"], ["KeyC", "c"], ["KeyV", "v"], ["KeyB", "b"], ["KeyN", "n"], ["KeyM", "m"], ["Comma", ","], ["Period", "."], ["Slash", "/"], ["ArrowUp", "▲"], ["ShiftRight", "Shift"]];
let keysRow4EnSpecials = [["ShiftLeft", "Shift"], ["KeyZ", "z"], ["KeyX", "x"], ["KeyC", "c"], ["KeyV", "v"], ["KeyB", "b"], ["KeyN", "n"], ["KeyM", "m"], ["Comma", "<"], ["Period", ">"], ["Slash", "?"], ["ArrowUp", "▲"], ["ShiftRight", "Shift"]];
let keysRow4Ru = [["ShiftLeft", "Shift"], ["KeyZ", "я"], ["KeyX", "ч"], ["KeyC", "с"], ["KeyV", "м"], ["KeyB", "и"], ["KeyN", "т"], ["KeyM", "ь"], ["Comma", "б"], ["Period", "ю"], ["Slash", "."], ["ArrowUp", "▲"], ["ShiftRight", "Shift"]];
let keysRow4RuSpecials = [["ShiftLeft", "Shift"], ["KeyZ", "я"], ["KeyX", "ч"], ["KeyC", "с"], ["KeyV", "м"], ["KeyB", "и"], ["KeyN", "т"], ["KeyM", "ь"], ["Comma", "б"], ["Period", "ю"], ["Slash", ","], ["ArrowUp", "▲"], ["ShiftRight", "Shift"]];
let keysRow5En = [["ControlLeft", "Ctrl"], ["MetaLeft", "Win"], ["AltLeft", "Alt"], ["Space", " "], ["AltRight", "Alt"], ["ControlRight", "Ctrl"], ["ArrowLeft", "◄"], ["ArrowDown", "▼"], ["ArrowRight", "►"]];



let arrEn = [keysRow1En, keysRow2En, keysRow3En, keysRow4En, keysRow5En];
let arrRu = [keysRow1Ru, keysRow2Ru, keysRow3Ru, keysRow4Ru, keysRow5En];
let arrRuSpecials = [keysRow1RuSpecials, keysRow2RuSpecials, keysRow3Ru, keysRow4RuSpecials, keysRow5En];
let arrEnSpecials = [keysRow1Specials, keysRow2EnSpecials, keysRow3EnSpecials, keysRow4EnSpecials, keysRow5En];

let isEngLang = false;







function generateKeyboard(arr) {

    if (document.querySelectorAll('.row')) document.querySelectorAll('.row').forEach(el => el.remove());

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
    txtarea = document.querySelector('.textarea');
    keys = [...onceKeys, ...twiceKeys, spaceKey];

    keys.forEach(el => {

        el.addEventListener('click', (e) => {
            if (e.target.innerText == 'CapsLock') {
                if (caps) {
                    caps = !caps;
                    keys.forEach(elem => {
                        let elClass = elem.className;
                        if (elClass.includes('Key')) elem.innerText = elem.innerText.toLowerCase();
                    })
                }
                else {
                    caps = !caps;
                    keys.forEach(elem => {
                        let elClass = elem.className;
                        if (elClass.includes('Key')) elem.innerText = elem.innerText.toUpperCase();
                    })
                }
            }
            if (e.target.innerText == 'Shift') txtarea.value += '111';
            else if (e.ctrlKey) txtarea.value += ''
            else if (e.altKey) txtarea.value += ''
            else if (e.target.innerText == 'Semicolon') txtarea.value += ''
            else if (e.target.innerText == 'Ctrl') txtarea.value += ''
            else if (e.target.innerText == 'Win') txtarea.value += ''
            else if (e.target.innerText == 'Space') txtarea.value += ' '
            else if (e.target.innerText == 'Quote') txtarea.value += '`'
            else if (e.target.innerText == 'Comma') txtarea.value += ''
            else if (e.target.innerText == 'Period') txtarea.value += ''
            else if (e.target.innerText == 'CapsLock') txtarea.value += ''
            else if (e.target.innerText == 'Tab') txtarea.value += '    '
            else if (e.target.innerText == 'Alt') txtarea.value += ''
            else if (e.target.innerText == 'Enter') txtarea.value += '\n'
            else if (e.target.innerText == 'ArrowUp') txtarea.value += ''
            else if (e.target.innerText == 'ArrowDown') txtarea.value += ''
            else if (e.target.innerText == 'ArrowLeft') txtarea.value += ''
            else if (e.target.innerText == 'ArrowRight') txtarea.value += ''
            else if (e.target.innerText == 'Backspace') txtarea.value = txtarea.value.slice(0, -1)
            else if (e.target.innerText == 'Delete') txtarea.value = txtarea.value.slice(0, -1)


            else txtarea.value += el.innerText;

        });
    });
}

generateKeyboard(arrEn);



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
        if (e.shiftKey && (elClass.includes('BracketRight'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Backquote'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('BracketLeft'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Semicolon'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Quote'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Comma'))) el.innerText = el.innerText.toUpperCase();
        else if (e.shiftKey && (elClass.includes('Period'))) el.innerText = el.innerText.toUpperCase();
        else if (el.classList.contains(`${e.code}`)) el.classList.add('on');
    })
    console.log(e.code);

    if (e.shiftKey) txtarea.value += '';
    if (e.code == 'ShiftLeft' && e.key) txtarea.value += e.code != 'ShiftLeft' ? e.key.toUpperCase() : '';
    else if (e.ctrlKey) txtarea.value += ''
    else if (e.altKey) txtarea.value += ''
    else if (e.key == 'Semicolon') txtarea.value += ''
    else if (e.key == 'Quote') txtarea.value += ''
    else if (e.key == 'Comma') txtarea.value += ''
    else if (e.key == 'Period') txtarea.value += ''
    else if (e.key == 'CapsLock') txtarea.value += ''
    else if (e.key == 'Tab') txtarea.value += ''
    else if (e.key == 'Alt') txtarea.value += ''
    else if (e.key == 'Enter') txtarea.value += ''
    else if (e.key == 'ArrowUp') txtarea.value += ''
    else if (e.key == 'ArrowDown') txtarea.value += ''
    else if (e.key == 'ArrowLeft') txtarea.value += ''
    else if (e.key == 'ArrowRight') txtarea.value += ''
    else if (e.key == 'Backspace') txtarea.value = txtarea.value.slice(0, -1)
    else if (e.key == 'Delete') txtarea.value = txtarea.value.slice(0, -1)
    else txtarea.value += e.key;

});

addEventListener('keyup', (e) => {

    if (e.code == 'CapsLock') caps = !caps;

    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        if (isEngLang) generateKeyboard(arrRu)
        else generateKeyboard(arrEn);
    }

    keys.forEach(el => {
        let elClass = el.className;

        if (elClass.includes('Key', 'BracketRight')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('BracketRight')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Backquote')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('BracketLeft')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Semicolon')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Quote')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Comma')) el.innerText = el.innerText.toLowerCase();
        if (elClass.includes('Period')) el.innerText = el.innerText.toLowerCase();
        if (el.classList.contains(`${e.code}`)) el.classList.remove('on');


        if (caps && elClass.includes('Key')) el.innerHTML = el.innerText.toUpperCase();
        else if ((!caps && elClass.includes('Key'))) el.innerText = el.innerText.toLowerCase();

    });
});




