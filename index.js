import { renderCommentsList } from './modules/fetchGETAndRenderComments.js';
//import { addComment } from './modules/addComment.js';
import { authorizationForm } from './modules/formAuthorization.js';

renderCommentsList();
authorizationForm();

export const upload = document.getElementById('uploading-data');
//addComment();
('use strict');

//export const userNameElement = document.querySelector('.add-form-name');
//export const userCommentElement = document.querySelector('.add-form-text');
//export const buttonSendElement = document.querySelector('.add-form-button');
export const ulElement = document.querySelector('.comments');
export const titleH3 = document.getElementById('titleH3');

export let likesCounter = 0;

console.log('It works!');
console.log('Complete');
