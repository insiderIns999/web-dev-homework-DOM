import { comments } from './comments.js';
import { token, switchLikes } from './api.js';

let status = null;

export const initButtonLikes = () => {
    const buttonsLikesElements = document.querySelectorAll('.like-button');
    buttonsLikesElements.forEach((buttonLikeElement, index) => {
        buttonLikeElement.addEventListener('click', (event) => {
            event.stopPropagation();

            if(token == null) {
                alert('Авторизуйтесь, чтобы поставить лайк');
                throw new Error('Авторизуйтесь, чтобы поставить лайк');
            }
            else {
                const id = comments[index].id;
                switchLikes({ id });
                
                if(!comments[index].isLiked) {
                    status = '-loasing-like-to-like';
                }
                else {
                    status = '-loasing-like-to-dislike';
                }
                
                buttonLikeElement.classList.add(status);
            }
        });

        buttonLikeElement.classList.remove(status);
    });
};
