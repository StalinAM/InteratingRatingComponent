const displayValue = document.getElementById('displayVal');
const buttonValue = document.querySelectorAll('.option-container input');
const sendButton = document.querySelector('#primary-button');
const primaryScreen = document.getElementById('main-screen');
const secondaryScreen = document.getElementById('secondary-screen');

let selectionsNum = 0;

buttonValue.forEach(item => {
    item.addEventListener('click', () => {
        sendButton.addEventListener('click', () => {
            document.getElementById('displayVal').value = "You slected " + item.value + " out of 5";
            primaryScreen.style.display = "none";
            secondaryScreen.style.display = "flex"
        })

    })
})

