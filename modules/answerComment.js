import { userCommentElement } from '../index.js';
import { comments } from './comments.js';

export const answerComment = () => {
    const liElements = document.querySelectorAll('.comment');
    liElements.forEach((liElement, index) => {
        liElement.addEventListener('click', () => {
            userCommentElement.value =
                '> ' +
                comments[index].userName +
                '\n \n > ' +
                comments[index].commentText +
                '<br />';
        });
    });
};
