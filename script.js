let button = document.getElementById('btn');
let output = document.getElementById('output');
let string = document.getElementById('str');

button.addEventListener('click', function(){
    let word = string.value;
    let count = word.length;
    output.innerHTML = `<h1>${count}</h1>`;
});