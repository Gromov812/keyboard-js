function createElement(element, className, innerContent) {
  const elem = document.createElement(element);
  if (className) elem.className = className;
  if (innerContent !== undefined) elem.innerHTML = `${innerContent}`;
  return elem;
}

let caps = false;
let isEngLang = JSON.parse(localStorage.getItem('engLang'));

const body = document.querySelector('body');

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

const notice = createElement('p', 'notice', `Alt + Shift: Switch Lang | Current lang: ${isEngLang ? 'Ru' : 'En'}`);

container.append(notice);
container.append(textarea);

const keysRow1Spec = [['Backquote', '~'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace']];
const keysRow1RuSpec = [['Backquote', 'Ё'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'], ['Backspace', 'Backspace']];
const keysRow1En = [['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace']];
const keysRow1Ru = [['Backquote', 'ё'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace']];
const keysRow2En = [['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Delete', 'Delete']];
const keysRow2EnSpec = [['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '{'], ['BracketRight', '}'], ['Backslash', '|'], ['Delete', 'Delete']];
const keysRow2Ru = [['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '/'], ['Delete', 'Delete']];
const keysRow2RuSpec = [['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '\\'], ['Delete', 'Delete']];
const keysRow3En = [['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter']];
const keysRow3EnSpec = [['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ':'], ['Quote', '"'], ['Enter', 'Enter']];
const keysRow3Ru = [['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', 'э'], ['Enter', 'Enter']];
const keysRow4En = [['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift']];
const keysRow4EnSpec = [['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', '<'], ['Period', '>'], ['Slash', '?'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift']];
const keysRow4Ru = [['ShiftLeft', 'Shift'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '.'], ['ArrowUp', '▲'], ['ShiftRight', 'Shift']];
const keysRow4RuSpec = [['ShiftLeft', 'Shift'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', ','], ['ArrowUp', '▲'], ['ShiftRight', 'Shift']];
const keysRow5En = [['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ControlRight', 'Ctrl'], ['ArrowLeft', '◄'], ['ArrowDown', '▼'], ['ArrowRight', '►']];

const arrEn = [keysRow1En, keysRow2En, keysRow3En, keysRow4En, keysRow5En];
const arrRu = [keysRow1Ru, keysRow2Ru, keysRow3Ru, keysRow4Ru, keysRow5En];
const arrRuSpec = [keysRow1RuSpec, keysRow2RuSpec, keysRow3Ru, keysRow4RuSpec, keysRow5En];
const arrEnSpec = [keysRow1Spec, keysRow2EnSpec, keysRow3EnSpec, keysRow4EnSpec, keysRow5En];

function generateKeyboard(arr) {
  if (document.querySelectorAll('.row')) document.querySelectorAll('.row').forEach((el) => el.remove());

  arr.forEach((el) => {
    const rowElem = createElement('div', 'row');
    el.forEach((elem) => {
      const keyElem = createElement('div', 'once');

      switch (elem[1]) {
        case 'Backspace':
          keyElem.innerHTML = `${elem[1]}`;
          keyElem.className = `twice ${elem[0]}`;

          break;
        case 'CapsLock':
          keyElem.innerHTML = `${elem[1]}`;
          keyElem.className = `twice ${elem[0]}`;
          break;
        case 'Enter':
          keyElem.innerHTML = `${elem[1]}`;
          keyElem.className = `twice ${elem[0]}`;
          break;
        case 'Shift':
          keyElem.innerHTML = `${elem[1]}`;
          keyElem.className = `twice ${elem[0]}`;
          break;
        case ' ':
          keyElem.innerHTML = 'Space';
          keyElem.className = `space ${elem[0]}`;
          break;

        default:
          keyElem.innerHTML = `${elem[1]}`;
          keyElem.className = `once ${elem[0]}`;
          break;
      }

      rowElem.appendChild(keyElem);
    });
    container.appendChild(rowElem);
  });

  onceKeys = document.querySelectorAll('.once');
  twiceKeys = document.querySelectorAll('.twice');
  spaceKey = document.querySelector('.space');
  txtarea = document.querySelector('.textarea');
  keys = [...onceKeys, ...twiceKeys, spaceKey];
  document.querySelector('.notice').innerHTML = `Alt + Shift: Switch Lang | Current lang: ${isEngLang ? 'Ru' : 'En'}`;

  keys.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.innerText === 'CapsLock') {
        if (caps) {
          caps = !caps;
          keys.forEach((elem) => {
            const elClass = elem.className;
            if (elClass.includes('Key')) elem.innerText = elem.innerText.toLowerCase();
          });
        } else {
          caps = !caps;
          keys.forEach((elem) => {
            const elClass = elem.className;
            if (elClass.includes('Key')) elem.innerText = elem.innerText.toUpperCase();
          });
        }
      }
      if (e.target.innerText === 'Shift') txtarea.value += '111';
      else if (e.ctrlKey) txtarea.value += '';
      else if (e.altKey) txtarea.value += '';
      else if (e.target.innerText === 'Semicolon') txtarea.value += '';
      else if (e.target.innerText === 'Ctrl') txtarea.value += '';
      else if (e.target.innerText === 'Win') txtarea.value += '';
      else if (e.target.innerText === 'Space') txtarea.value += ' ';
      else if (e.target.innerText === 'Quote') txtarea.value += '`';
      else if (e.target.innerText === 'Comma') txtarea.value += '';
      else if (e.target.innerText === 'Period') txtarea.value += '';
      else if (e.target.innerText === 'CapsLock') txtarea.value += '';
      else if (e.target.innerText === 'Tab') txtarea.value += '    ';
      else if (e.target.innerText === 'Alt') txtarea.value += '';
      else if (e.target.innerText === 'Enter') txtarea.value += '\n';
      else if (e.target.innerText === 'ArrowUp') txtarea.value += '▲';
      else if (e.target.innerText === 'ArrowDown') txtarea.value += '▼';
      else if (e.target.innerText === 'ArrowLeft') txtarea.value += '◄';
      else if (e.target.innerText === 'ArrowRight') txtarea.value += '►';
      else if (e.target.innerText === 'Backspace') txtarea.value = txtarea.value.slice(0, -1);
      else if (e.target.innerText === 'Delete') txtarea.value = txtarea.value.slice(0, -1);
      else txtarea.value += el.innerText;
    });
  });
}

if (isEngLang) {
  generateKeyboard(arrRu);
} else {
  generateKeyboard(arrEn);
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  if (e.altKey && e.shiftKey) {
    if (e.repeat) return;
    if (isEngLang) generateKeyboard(arrRu);
    else generateKeyboard(arrEn);
    isEngLang = !isEngLang;
    localStorage.setItem('engLang', isEngLang);
  }

  if (e.shiftKey) {
    if (e.repeat) return;
    if (isEngLang) generateKeyboard(arrRuSpec);
    else generateKeyboard(arrEnSpec);
  }

  keys.forEach((el) => {
    const elClass = el.className;
    if (e.shiftKey && (elClass.includes('Key', 'BracketRight'))) el.innerText = el.innerText.toUpperCase();
    if (e.shiftKey && (elClass.includes('BracketRight'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('Backquote'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('BracketLeft'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('Semicolon'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('Quote'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('Comma'))) el.innerText = el.innerText.toUpperCase();
    else if (e.shiftKey && (elClass.includes('Period'))) el.innerText = el.innerText.toUpperCase();
    if (el.classList.contains(`${e.code}`)) el.classList.add('on');
  });

  if (e.shiftKey) txtarea.value += '';
  if (e.code === 'ShiftLeft' && e.key) txtarea.value += e.code !== 'ShiftLeft' ? e.key.toUpperCase() : '';
  else if (e.ctrlKey) txtarea.value += '';
  else if (e.altKey) txtarea.value += '';
  else if (e.key === 'Semicolon') txtarea.value += '';
  else if (e.code === 'ShiftRight') txtarea.value += '';
  else if (e.key === 'Quote') txtarea.value += '';
  else if (e.key === 'Comma') txtarea.value += '';
  else if (e.code === 'Space') txtarea.value += ' ';
  else if (e.key === 'Meta') txtarea.value += '';
  else if (e.key === 'Period') txtarea.value += '';
  else if (e.key === 'CapsLock') txtarea.value += '';
  else if (e.key === 'Tab') txtarea.value += '    ';
  else if (e.key === 'Escape') txtarea.value += '';
  else if (e.key === 'ScrollLock') txtarea.value += '';
  else if (e.key === 'Pause') txtarea.value += '';
  else if (e.key === 'Alt') txtarea.value += '';
  else if (e.key === 'Enter') txtarea.value += '\n';
  else if (e.key === 'ArrowUp') txtarea.value += '▲';
  else if (e.key === 'ArrowDown') txtarea.value += '▼';
  else if (e.key === 'ArrowLeft') txtarea.value += '◄';
  else if (e.key === 'ArrowRight') txtarea.value += '►';
  else if (e.key === 'Backspace') txtarea.value = txtarea.value.slice(0, -1);
  else if (e.key === 'Delete') txtarea.value = txtarea.value.slice(0, -1);
  else if (e.which >= 112 && e.which <= 123) txtarea.value = '';
  else txtarea.value += e.key;
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'CapsLock') caps = !caps;

  if (e.shiftKey) {
    if (e.repeat) return;
    if (isEngLang) generateKeyboard(arrRu);
    else generateKeyboard(arrEn);
  }

  keys.forEach((el) => {
    const elClass = el.className;
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
