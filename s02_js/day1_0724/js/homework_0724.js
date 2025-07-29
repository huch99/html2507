// const PI = 3.14;
// let radius = prompt("반지름을 입력하세요.")
// let area = PI * radius * radius ; 
// console.log(area);


let onL = './images/pic_bulbon.gif';
let offL = './images/pic_bulboff.gif';


function onLight() {
    document.getElementById('button').innerHTML
    = '<button onclick="offLight()">불 끄기</button>';

    document.getElementById('image').src = onL;
}

function offLight() {
    document.getElementById('button').innerHTML
    = '<button onclick="onLight()">불 켜기</button>';

    document.getElementById('image').src = offL;
}