// 'use strict';

// console.log('Hello World!!');

// const array = [1, 2, 'dog!', 1, 2, 'cat!'];

// console.log(array[0]); // → 1
// const animal = array[2];
// console.log(animal); // → dog!
// array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
// array[4] += array[0];
// console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']


// const array = [1, 2, 3, 'dah', '!!'];

// for (let i = 0; i < 5; i += 1) {
//   console.log(array[i]); // → 1, 2, 3, dah, !!
//   array[i] = i;  // 要素の値の書き換え
// }

// console.log(array); // → [0, 1, 2, 3, 4]

// const array = [1, 2, 3, 'dah', '!!'];
// console.log(array.length); // → 5

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// for (const el of array) {
//     console.log(el);  // 1 → 2 → 3
//   }


// for (let el of array) {
//   el = 'Hello World!!';  // for-of変数を書き換えても…
// }
// console.log(array); // 元の配列には変化なし → [1, 2, 3]



// const array = [1, 2, 3];

{
    const array = ['a', 'b', 'c'];

    const index = array.indexOf('b'); // 戻り値：1
    console.log(array);
    if (index != -1) {
    console.log(array);
    array.splice(index, 1);  // → ['a', 'c']
    }


    array.splice(1, 0, 'A');  // インデックス 1 に'A'を挿入 [1, 'A', 2, 3]
    array.splice(2, 1);    


    if (index != -1) {
    array.splice(index, 1);  // → ['a', 'c']
    }// インデックス 2 を削除 [1, 'A', 3]
    console.log(array);
}


{    
    const array = [1, 2, 3];

    const newArray = array.map((el) => el + '号');
    console.log(newArray);  // → [1号, 2号, 3号]

    // 同じ処理をfor-of文で描くと…
    const newArray2 = [];
    for (const el of array) {
    newArray2.push(el + '号');
    console.log(newArray2);
    }
}


{
    const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3);
console.log(newArray);  // → [4, 5]

// 同じ処理をfor-of文で描くと…
const newArray2 = [];
for (const el of array) {
  if (el > 3) {
    newArray2.push(el);
    console.log(newArray2);
  }
}
}


// 'use strict';

// const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

// const ul = document.querySelector('#list');

// for (const name of etoList) {
//     const li = document.createElement('li');
//     li.textContent = name;
//     ul.appendChild(li);
//   // liエレメントの内容を配列arrayの各要素に
//   // liエレメントをulエレメントの子要素にする
// }

{
  const ul = document.querySelector('#list');
  const numList = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenList = numList.filter((num) => num % 2 === 0).map((even) => 'No.' + even);

  for (const text of evenList) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }
}