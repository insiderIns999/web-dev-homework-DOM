import { comments, updateComments } from './modules/comments.js';
import { initButtonLikes } from './modules/initButtonLikes.js';
import { renderComments } from './modules/renderComments.js';

fetch('https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments/', {
    method: 'GET'
}).then((response) => {
    return response.json();
}).then((data) => {
    updateComments(data.comments);
    renderComments();
});

('use strict');
export const userNameElement = document.querySelector('.add-form-name');
export const userCommentElement = document.querySelector('.add-form-text');
export const buttonSendElement = document.querySelector('.add-form-button');
export const ulElement = document.querySelector('.comments');

export let likesCounter = 0;

userNameElement.addEventListener('input', () => {
    userNameElement.style.backgroundColor = '#fff';
});
userCommentElement.addEventListener('input', () => {
    userCommentElement.style.backgroundColor = '#fff';
});

console.log('It works!');
console.log('Complete');
