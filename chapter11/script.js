// 'use strict';

// const list = [
//   'images/01.jpg',
//   'images/02.jpg',
//   'images/03.jpg',
//   'images/04.jpg',
//   'images/05.jpg',
//   'images/06.jpg',
//   'images/07.jpg',
//   'images/08.jpg',
//   'images/09.jpg',
//   'images/10.jpg',
// ];

// const img = document.getElementById('main');
// const [leftArrow, rightArrow] = document.getElementsByTagName('span');

// let imgN = 0;

// const p = document.createElement('p');
// p.style.color = 'lightgray';

// const div = document.getElementById('photo');
// div.insertBefore(p, img.nextElementSibling);

// function setImage() {
//   img.src = list[imgN];
//   p.textContent = `${imgN + 1} / ${list.length}`;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   setImage();
// });

// leftArrow.addEventListener('click', () => {
//   imgN -= 1;
//   if (imgN < 0) {
//     imgN = 0;
//   }
//   setImage();
// });

// rightArrow.addEventListener('click', () => {
//   imgN += 1;
//   if (imgN >= list.length) {
//     imgN = list.length - 1;
//   }
//   setImage();
// });

// let count = 0;
// document.body.style.color = 'white';

// // setInterval(() => {
// //   document.body.textContent = count;
// //   count += 1;
// // }, 1000);


// const countID = setInterval(() => {
//     document.body.textContent = count;
//     count += 1;
//     if (count > 5) {
//       clearInterval(countID);  // 繰り返し停止
//       document.body.textContent += ' stopped!!';
//     }
//   }, 1000);

//   const playButton = document.createElement('button');  // 再生ボタン
//   playButton.textContent = '自動再生する';
//   div.appendChild(playButton);  // div#photo要素の一番下の子要素にする


// playButton.addEventListener('click', () => {
//     setInterval(() => {
//       imgN += 1;
//       setImage();
//     }, 500);
//   });

//   if (imgN >= list.length) {
//     imgN = 0;
//   }


// if (imgN >= list.length) {
//   imgN = 0;
// }

// let autoplay = false; // 変数として宣言

// playButton.addEventListener('click', () => {
//  autoplay = setInterval(() => {
//   imgN += 1;
//   if (imgN >= list.length) {
//     imgN = 0;
//   }
//   setImage();
//  }, 500);  // constを取る
// });

// const stopButton = document.createElement('button');
// stopButton.textContent = '停止する';
// div.appendChild(stopButton);

// stopButton.addEventListener('click', () => {
//   clearInterval(autoplay);  // 無事使える
// });


// playButton.addEventListener('click', () => {
//   // 変数autoplayがfalseのときだけsetIntervalを呼ぶ
//   if (autoplay == false) {
//     playButton.textContent = '無効';  // ボタンの表示を変更
//     autoplay = setInterval(() => {
//       imgN += 1;
//       if (imgN >= list.length) {
//         imgN = 0;
//       }
//       setImage();
//     }, 500);
//   }
// });



'use strict';

/* 画像リスト */
const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

/* スライドショー */
const img = document.getElementById('main');
const [leftArrow, rightArrow] = document.getElementsByTagName('span');

let imgN = 0;

const p = document.createElement('p');
p.style.color = 'lightgray';

const div = document.getElementById('photo');
div.insertBefore(p, img.nextElementSibling);

function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
  setImage();
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  setImage();
});

rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage();
});

/* 自動再生／停止ボタン */
const button = document.createElement('button');
button.textContent = '自動再生する';
div.appendChild(button);

let autoplay = false;
button.addEventListener('click', () => {
  if (autoplay == false) {
    button.textContent = '停止する';
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false;
    button.textContent = '自動再生する';
  }
});