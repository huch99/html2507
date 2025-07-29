// let a = parseInt(prompt('a값'));

// let b = parseInt(prompt('b값'));

// function addNumber() {
//     let sum = a + b;
//     console.log(sum);
//     alert(sum);
// }

// addNumber(); 

function calcSum(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum+= i;
    }
    document.getElementById('result').innerHTML
    = `1부터 ${n}까지 더하면 ${sum}`;
}