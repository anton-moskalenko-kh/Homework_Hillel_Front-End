const password = document.querySelector('.js--password')
const letter = document.querySelector('.js--letter')
const number = document.querySelector('.js--number')
const punctuation = document.querySelector('.js--punctuation')
const minSymbols = document.querySelector('.js--min-symbols')

password.addEventListener('input', function () {
    const inputValue = password.value;
    (inputValue.match(/\d/g)) ? number.style.color = 'green' : number.style.color = 'red';
    (inputValue.match(/[A-Z]/g)) ? letter.style.color = 'green' : letter.style.color = 'red';
    (inputValue.match(/[^\d\sA-Z]/gi)) ? punctuation.style.color = 'green' : punctuation.style.color = 'red';
    (inputValue.match(/[\S\s]{8,}/gi)) ? minSymbols.style.color = 'green' : minSymbols.style.color = 'red';
})