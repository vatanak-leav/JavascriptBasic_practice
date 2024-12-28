const inputField = document.getElementById('userinput');
const submitButton = document.getElementById('btnsubmit');
const displayText = document.getElementById('display_text');

submitButton.addEventListener('click', () => {
    const inputValue = inputField.value; 

    displayText.textContent = 'You entered :' + inputValue;

    console.log('You entered :' + inputValue);
});