import { userNameElement, userCommentElement, likesCounter } from '../index.js';
import { getUserCommentDate } from './userCommentDate.js';
import { initButtonLikes } from './initButtonLikes.js';
import { renderComments } from './renderComments.js';
import { comments, updateComments } from './comments.js';
import { replaceAllTags } from './replaceAll.js';

export function addComment() {
    if (
        userNameElement.value == '' ||
        userNameElement.value == ' ' ||
        userCommentElement.value == '' ||
        userCommentElement.value == ' '
    ) {
        userNameElement.style.backgroundColor = '#f00';
        userCommentElement.style.backgroundColor = '#f00';
        alert('Пожалуйста заполните все поля');
    } else {
        const nameReplaced = replaceAllTags(userNameElement.value);
        const commentReplaced = replaceAllTags(userCommentElement.value);

        fetch('https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments', {
            method: 'POST',
            body: JSON.stringify({
                name: nameReplaced,
                text: commentReplaced
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            fetch('https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments/', {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((data) => {
                updateComments(data.comments);
                renderComments();
            });
        });

        /*
        comments.push({
            userName: nameReplaced,
            commentText: commentReplaced,
            userDate: getUserCommentDate(),
            likes: likesCounter,
            isLiked: false,
        });
        */
        userNameElement.value = '';
        userCommentElement.value = '';
        initButtonLikes();
    }
}
