'use strict';

const storage = localStorage;

const table = document.querySelector('table');
const todo = document.getElementById('todo');
const priority = document.querySelector('select');
const deadline = document.querySelector('input[type="date"]');
const submit = document.getElementById('submit');

let list = [];

document.addEventListener('DOMContentLoaded', () => {
  const json = storage.todoList;
  if (json == undefined) {
    return;
  }
  list = JSON.parse(json);
  for (const item of list) {
    addItem(item);
  }
});

const addItem = (item) => {
  const tr = document.createElement('tr');

  for (const prop in item) {
    const td = document.createElement('td');
    if (prop == 'done') {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item[prop];
      td.appendChild(checkbox);
    } else {
      td.textContent = item[prop];
    }
    tr.appendChild(td);
  }

  table.append(tr);
};

submit.addEventListener('click', () => {
  const item = {};

  if (todo.value != '') {
    item.todo = todo.value;
  } else {
    item.todo = 'ダミーTODO';
  }
  item.priority = priority.value;
  if (deadline.value != '') {
    item.deadline = deadline.value;
  } else {
    item.deadline = new Date().toLocaleDateString().replace(/\//g, '-');
  }
  item.done = false;

  todo.value = '';
  priority.value = '普';
  deadline.value = '';

  addItem(item);

  list.push(item);
  storage.todoList = JSON.stringify(list);
});

const filterButton = document.createElement('button');
filterButton.textContent = '優先度（高）で絞り込み';
filterButton.id = 'priority';
const main = document.querySelector('main');
main.appendChild(filterButton);

filterButton.addEventListener('click', () => {
  const trList = Array.from(document.getElementsByTagName('tr'));
  trList.shift();
  for (const tr of trList) {
    tr.remove();
  }

  for (const item of list) {
    if (item.priority == '高') {
      addItem(item);
    }
  }
});

const clearTable = () => {
    const trList = Array.from(document.getElementsByTagName('tr'));
    trList.shift();
    for (const tr of trList) {
      tr.remove();
    }
  };

  const remove = document.createElement('button');
  remove.textContent = '完了したTODOを削除する';
  remove.id = 'remove';  // CSS装飾用
  const br = document.createElement('br'); // 改行したい
  main.appendChild(br);
  main.appendChild(remove);

  remove.addEventListener('click', () => {
  clearTable();  // TODOデータを一旦削除

  for (const item of list) {
    if (item.done == true) {
      addItem(item);
    }
  }
});
// 1. 未完了のTODOを抽出して定数listを置き換え
list = list.filter((item) => item.done == false);
// 2. TODOデータをテーブルに追加
for (const item of list) {
    addItem(item);
  }
  // 3. ストレージデータを更新
  storage.todoList = JSON.stringify(list);

  if (prop == 'done') {
    const checkbox = document.createElement('input');
    // 略
    td.appendChild(checkbox);
    checkbox.addEventListener('change', checkBoxListener); // 追加
  }
  