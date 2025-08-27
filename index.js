import { fetchGETAndRenderComments } from './modules/fetchGETAndRenderComments.js';

fetchGETAndRenderComments();
console.log('OK');
('use strict');
export const userNameElement = document.querySelector('.add-form-name');
export const userCommentElement = document.querySelector('.add-form-text');
export const buttonSendElement = document.querySelector('.add-form-button');
export const ulElement = document.querySelector('.comments');
export const titleH3 = document.getElementById('titleH3');

export let likesCounter = 0;

userNameElement.addEventListener('input', () => {
    userNameElement.style.backgroundColor = '#fff';
});
userCommentElement.addEventListener('input', () => {
    userCommentElement.style.backgroundColor = '#fff';
});

console.log('It works!');
console.log('Complete');
