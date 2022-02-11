const inputElNumber = document.getElementById('number');
const enterBtn = document.querySelectorAll('.enter');
const reseatBtn = document.querySelectorAll('.reseat');
const inputElString = document.getElementById('string');
const resultsEl = document.querySelectorAll('.results');
const numberList = document.getElementById('number-list');
const stringList = document.getElementById('string-list');
const stringContainer = document.getElementById('string-container');
const numberContainer = document.getElementById('number-container');

enterBtn[0].addEventListener('click', function () {
    reverse(inputElString.value, resultsEl[0]);
})

enterBtn[1].addEventListener('click', function () {
    reverse(inputElNumber.value, resultsEl[1]);
})

reseatBtn[0].addEventListener('click', function(){
    reseat(resultsEl[0], inputElString);
})

reseatBtn[1].addEventListener('click', function(){
    reseat(resultsEl[1], inputElNumber);
})

numberList.addEventListener('click', function(){
    stringContainer.style.display="none";
    numberContainer.style.display="flex";
})

stringList.addEventListener('click', function(){
    stringContainer.style.display="flex";
    numberContainer.style.display="none";
})

function reverse(string, results) {
    string = string.split('').reverse().join('');
    results.textContent = string;
}

function reseat(results, input){
    results.textContent = '';
    input.value = ""
}