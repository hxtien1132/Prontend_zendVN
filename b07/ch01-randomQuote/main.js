
const QUOTES = [
   'tien ha',
   'van quang',
   'phi hoang',
   'duc toan',
   'van hieu',
];
const TIME = 1000;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
function showRandom(){
    let quote = QUOTES[getRandomInt(0, QUOTES.length-1)];
    document.querySelector('.quote').innerHTML = quote ;

}
showRandom();
setInterval(function(){
    showRandom();
}, TIME);
