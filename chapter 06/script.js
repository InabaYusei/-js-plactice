'use strict';

console.log('Hello World!!');

// const profile = { name: 'OJK', bloodType: 'A', height: 165, weight: 52 };
// console.log('血液型: ' + profile['bloodType']); // → 血液型: A

// const profile = { name: 'OJK', weight: 52 };

// profile.bloodType = 'A';  // 追加
// profile['height'] =  165; // 追加

// profile.weight = 48;  // 上書き
// console.log(profile);
{
    const obj = { a: 'A', b: 'B', c: 'C' };

    // プロパティ名 a を直接指定する
    console.log(obj.a);     // → A （ドット記法）
    console.log(obj['a']);  // → A （ブラケット記法）

    // プロパティ名 a を定数に代入してから指定する
    const prop = 'a';
    console.log(obj.prop);  // → undefined
    console.log(obj[prop]); // → A

}

{
    const obj = { a: 'A', b: 'B', c: 'C' };

    for (const prop in obj) {
      console.log(prop);       // → a → b → c
      console.log(obj[prop]);  // → A → B → C
    }

}


{
    const profile = {
        name: 'OJK',
        bloodType: 'A',
        servants: ['犬', '猿', '雉'],
        style: { height: 165, weight: 52, waist: 76 }
      };

    console.log(profile.servants[2]);  // → 雉
    console.log(profile.style.height); // → 165

    // profile.servantsは単なる配列
    for (const servant of profile.servants) {
        console.log(`家来: ${servant}`); // → 家来: 犬 → 家来: 猿 → 家来: 雉
    }

    // profile.styleは単なるオブジェクト
    const myStyle = profile.style;
    for (const prop in myStyle) {
        console.log(`${prop} is ${myStyle[prop]}`); // → height is 165 → 略
    }

    // Object.entriesを使ってfor-of文で書く
    for (const [prop, val] of Object.entries(profile)) {
        if (prop == 'name' || prop == 'bloodType') {
        console.log(`${prop}は${val}です`);
    }
    }
}

{
    const evList = [
        { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
        { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
        { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
        { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
        { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
        { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
        { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
        { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
      ];
      for (const ev of evList) {
        console.log(`${ev.name}のタイプは${ev.type}です`);
      }
      for (const ev of evList) {
        console.log(`${ev.name}のタイプは${ev.type}です`);
      }
      
}

// {
//     const nameList = evList.map((ev) => `${ev.name}だぞ`);
//     for (const n of nameList) {
//   console.log(n); // 'サンダースだぞ' →　'ブースターだぞ' → ...
// }
// }

// const nameList = evList
//   .filter((ev) => ev.weight > 25) // 条件式でオブジェクトを抽出
//   .map((ev) => `${ev.name}（${ev.weight}kg）`);  // 加工

// // nameListは普通の配列
// for (const n of nameList) {
//   console.log(n);  // エーフィ（26.5kg） → ブラッキー（27.0kg) → ...
// }

// evList
//   .filter((ev) => ev.weight > 25)
//   .map((ev) => `${ev.name}（${ev.weight}kg）`)
//   .forEach((ev) => {
//     console.log(ev);
//   });

//   for (const ev of evList) {
//     if (ev.weight > 25) {
//       console.log(`${ev.name}（${ev.weight}kg）`);
//     }
//   }



const table = document.querySelector('table');
const tr = document.createElement('tr');
const th = document.createElement('th');

th.textContent = '名前';
tr.appendChild(th);
th.textContent = 'タイプ';
tr.appendChild(th);
th.textContent = '体重';
tr.appendChild(th);
th.textContent = '特技'; // これだけしか表示されない
tr.appendChild(th);

table.appendChild(tr);

const evList = [
    { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
    { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
    { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
    { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
    { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
    { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
    { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
    { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
  ];

  for (const ev of evList) {
    console.log(ev.name);
  }
  for (const ev of evList) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = ev.name;
    tr.appendChild(td);
    table.appendChild(tr);
  }

  for (const ev of evList) {
  const tr = document.createElement('tr');
  for (const prop in ev) {
    const td = document.createElement('td');
    td.textContent = ev[prop];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

for (const ev of evList) {
    const tr = document.createElement('tr');
    for (const prop in ev) {
      const td = document.createElement('td');
      td.textContent = ev[prop];
      if (prop == 'weight') {  // もしプロパティがweightだったら…
        td.textContent += ' kg';  // +=で kg を追記する
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }