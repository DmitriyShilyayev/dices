
let gameButton = document.querySelector('#generate-cubes'),
    dicesAmount = document.querySelector('#dices-amount'),
    dicesWrapper = document.querySelector('.cubes-wrapper');

gameButton.addEventListener('click', startGame)

function startGame() {
    dicesWrapper.innerHTML = ''
    let dicesAmountValue = dicesAmount.value;
    dicesWrapper.classList.remove('-hidden');

    for (let i = 1; i <= dicesAmountValue; i++) {
        renderDice(i);
    }

    document.querySelectorAll('.dice').forEach((dice, index) => {
        rollValue(dice, (index + 1) * 2);
    })

    for (let i = 1; i <= dicesAmountValue; i++) {
    }
}

function rollValue(elem, number) {
    setClass(elem, getRandomValue());
    if (number > 0) {
        setTimeout(() => { rollValue(elem, number - 1) }, Math.floor(1000 / number));
    }
}

function renderDice(number) {
    let dice = document.createElement('DIV');
    dice.classList.add('dice');
    dice.setAttribute('number', number);
    setClass(dice, number);
    dicesWrapper.appendChild(dice);
}


function setClass(elem, value) {
    switch (value) {
        case 1:
            elem.classList.remove('two', 'three', 'four', 'five', 'six');
            elem.classList.add('one')
            break;
        case 2:
            elem.classList.remove('one', 'three', 'four', 'five', 'six');
            elem.classList.add('two')
            break;
        case 3:
            elem.classList.remove('one', 'two', 'four', 'five', 'six');
            elem.classList.add('three')
            break;
        case 4:
            elem.classList.remove('one', 'two', 'three', 'five', 'six');
            elem.classList.add('four')
            break;
        case 5:
            elem.classList.remove('one', 'two', 'three', 'four', 'six');
            elem.classList.add('five')
            break;
        case 6:
            elem.classList.remove('one', 'two', 'three', 'four', 'five');
            elem.classList.add('six')
            break;
        default:
            elem.classList.remove('two', 'three', 'four', 'five', 'six');
            elem.classList.add('one')
    }
}

function getRandomValue() {
    return Math.floor(Math.random() * 6 + 1);
}
