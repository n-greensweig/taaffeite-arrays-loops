// console.log('Hello world!');

let colors = ['orange', 'teal', 'green'];
colors.pop();
colors.push('blue', 'pink');
colors.unshift('purple');
let firstColorRemoved = colors.shift();
colors.unshift('green');

// Loops
// 'for of' loop
let colorList = document.querySelector('#color-list');
for (let item of colors) {
    console.log('color:', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

let temps = [72, 84, 93, 102];
let tempSelector = document.querySelector('#temp-list');
// traditional 'for' loop
for (let i = 0; i < temps.length; i++) {
    let temp = temps[i];
    // console.log(temp);
    tempSelector.innerHTML += '<div>' + temp + '</div>';
    // (i + 1) % 2 == 1 ? console.log(i + 1) : '' /* Do nothing */;
}

// 'while' loop
let start = 0;
while (start < 10) {
    console.log(start);
    start++;
}

for (let temp of temps) {
    console.log(temp);
}

let nums = [2, 4, 5];
console.log(nums.reduce((a, b) => a + b, 0));