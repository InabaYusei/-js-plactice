'use strict';

const storage = localStorage;

const input = document.querySelector('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

const ul = document.createElement('ul');
output.appendChild(ul);

let listItems = [];

document.addEventListener('DOMContentLoaded', () => {
  if (storage.store != undefined) {
    listItems = JSON.parse(storage.store);
  }

  for (const item of listItems) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
});

submit.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);

  listItems.push(input.value);
  storage.store = JSON.stringify(listItems);

  input.value = '';
});

const remove = document.createElement('button');
remove.textContent = 'ストレージデータを削除';
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener('click', () => {
  delete storage.store;
  ul.textContent = '';
  listItems = [];
});