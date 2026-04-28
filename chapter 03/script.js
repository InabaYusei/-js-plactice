'use strict';

// const bmi = 28;
// console.log(`あなたのBMIは${bmi}です`);
// console.log(`'あなたのBMIは' +bmi +'です'`);

// const height = 1.65;
// const weight = 55;

// console.log(`身長：${height} 体重：${weight} → BMIは${bmi}です`);
// console.log('身長：' + height + ' 体重：' + weight + '→ BMIは' + bmi + 'です');


// console.log(`あなたのBMIは${bmi}:`);

// if (bmi > 25) {
//     console.log('肥満です');
// }


// const num1 = 50;
// const num2 = 10;

// if (num1 >= num2) {
//   console.log('num1 は num2 以上の値です');
// }

// if (bmi >= 18.5) {
//     // ここにはBMIが18.5以上の場合だけ到達する
//     if (bmi < 25) {
//       // ここにはBMIが18.5以上かつ25未満の場合だけ到達する
//       console.log('適正体重です');
//     }
//   }


const bmiInput = window.prompt('BMIの値を入力してください');
const pBmi = document.querySelector('#bmi');

if (bmiInput === null || bmiInput.trim() === '') {
  pBmi.textContent = '入力がありません。';
} else {
  const bmi = Number(bmiInput);
  if (Number.isNaN(bmi)) {
    pBmi.textContent = '数値を入力してください。';
  } else {
    let judgment;
    if (bmi > 25) {
      judgment = '肥満です';
    } else if (bmi < 18.5) {
      judgment = '低体重です';
    } else {
      judgment = '適正体重です';
    }
    pBmi.textContent = `あなたのBMIは${bmi}です。${judgment}`;
  }
}