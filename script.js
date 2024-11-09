
let gameButton = document.querySelector('#generate-cubes'),
    dicesAmount = document.querySelector('#dices-amount'),
    dicesWrapper = document.querySelector('.cubes-wrapper'),
    colorButton = document.querySelector('#color-theme');

gameButton.addEventListener('click', startGame);
colorButton.addEventListener('click', changeColor);

function startGame() {
    dicesWrapper.innerHTML = ''
    let dicesAmountValue = dicesAmount.value;
    dicesWrapper.classList.remove('-hidden');

    for (let i = 1; i <= dicesAmountValue; i++) {
        renderDice(i);
    }

    document.querySelectorAll('.dice').forEach((dice, index) => {
        setTimeout(() => {
            setClass(dice, getRandomValue());
            dice.classList.add('done');
        }, 1000 * (index + 1));
    })
}

function renderDice(number) {
    let dice = document.createElement('DIV');
    dice.classList.add('dice');

    for (let i = 1; i <= 6; i++) {
        let side = document.createElement('DIV');
        side.classList.add('side');
        setClass(side, i);
        dice.append(side)
    }

    if (number > 6) {
        number -= 6;
    }
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

function changeColor() {
    document.body.classList.toggle('shrek');
}