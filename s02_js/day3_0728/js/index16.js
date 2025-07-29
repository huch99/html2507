let sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

document.getElementById('demo').innerHTML = `1부터 5까지 더하면 ${sum}`;

let sum2 = 0;

for (let i = 0; i < 6; i++) {
    sum2 += i;
}

document.getElementById('demo2').innerHTML = `1부터 5까지 더하면 ${sum2}`;

let sum3 = 0;

for (let j = 0; j < 1001; j++) {
    sum3 += j;
}

document.getElementById('demo3').innerHTML = `1부터 1000까지 더하면 ${sum3}`;

// let userInp = prompt('숫자를 입력하세요.');

// if (userInp !== null) { 
//     (userInp%4 === 0) ? 
//     document.getElementById('result').innerHTML 
//     = `${userInp}는 4의 배수입니다`
//     : document.getElementById('result').innerHTML
//     = `${userInp}는 4의 배수가 아닙니다`
//     }

// else {
//     document.getElementById('result').innerHTML
//     = '값을 입력해 주세요.'
// }

let userInp = prompt('몇까지 3의 배수를 찾을까요?');
let d = document.getElementById('result2');

if (userInp === null) {
   d.innerHTML = '값을 입력해주세요.'
}

else {
    for (i = 1; i <= userInp; i++) {
        if (i%3 === 0) {
            d.innerHTML += `${i},`;
            document.getElementById('result3').innerHTML
            = `${userInp}까지 3의 배수 : ${parseInt(userInp/3)}`;
        }

    }
}