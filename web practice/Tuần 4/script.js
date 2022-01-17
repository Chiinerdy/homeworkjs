let darkButton = document.getElementById('darkbtn');
let lightButton = document.getElementById('lightbtn');
console.log(darkButton);
console.log(lightButton);
darkButton.addEventListener('click', backgroundDark);
function backgroundDark () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
lightButton.addEventListener('click', backgroundLight);
function backgroundLight () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}