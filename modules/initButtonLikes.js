import { renderComments } from './renderComments.js';
import { comments } from './comments.js';

export const initButtonLikes = () => {
    const buttonsLikesElements = document.querySelectorAll('.like-button');
    buttonsLikesElements.forEach((buttonLikeElement, index) => {
        buttonLikeElement.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!comments[index].isLiked) {
                ++comments[index].likes;
                comments[index].isLiked = true;
            } else {
                --comments[index].likes;
                comments[index].isLiked = false;
            }
            renderComments();
        });
    });
};
