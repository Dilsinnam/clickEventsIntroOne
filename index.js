const button = document.querySelector("button");
const body = document.querySelector("body");
/* button.addEventListener('click', function() {  (An annoymous function is a function without a name) 
    alert("I have been clicked!")
})*/

button.addEventListener('click', function() {
    const pTag = document.createElement('p');
    pTag.textContent = "Hello World!";
    body.appendChild(pTag);
})