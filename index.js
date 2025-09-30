import { renderCommentsList } from './modules/fetchGETAndRenderComments.js';
import { authorizationForm } from './modules/formAuthorization.js';

renderCommentsList()
.then(() => {
    authorizationForm();
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
