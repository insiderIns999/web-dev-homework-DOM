import { renderCommentsList } from './modules/fetchGETAndRenderComments.js';
import { authorizationForm } from './modules/formAuthorization.js';
//import { takeAndRender } from './modules/api.js';
import { addingComment } from './modules/addComment.js';
import { authorizationForm } from './modules/formAuthorization.js';
//import { buttonSendElement } from './modules/addComment.js';

renderCommentsList()
.then(() => {
   // authorizationForm();
})

export const upload = document.getElementById('uploading-data');

export const userNameElement = document.querySelector('.add-form-name');
export const userCommentElement = document.querySelector('.add-form-text');

renderCommentsList()
//takeAndRender()
.then(() => {
    authorizationForm();
})
.then(() => {
    addingComment();
})

export const upload = document.getElementById('uploading-data');

('use strict');

export const ulElement = document.querySelector('.comments');
export const titleH3 = document.getElementById('titleH3');

export let userNameFromApi;
export const updateUserName = (newUserName) => {
    userNameFromApi = newUserName;
};

console.log('It works!');
console.log('Complete');



