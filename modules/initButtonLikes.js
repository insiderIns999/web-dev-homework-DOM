import { renderComments } from './renderComments.js';
import { comments } from './comments.js';
import { token } from './api.js';

function delay(interval = 300) {
   return new Promise((resolve) => {
      setTimeout(() => {
      resolve();
      }, interval);
   });
}

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
                if(!comments[index].isLiked) {
                    status = '-loasing-like-to-like';
                }
                else {
                    status = '-loasing-like-to-dislike';
                }

                buttonLikeElement.classList.add(status);
                //buttonLikeElement.classList.add('-loading-like');
                
                delay(2000).then(() => {
                    if (!comments[index].isLiked) {
                        ++comments[index].likes;
                        comments[index].isLiked = true;
                    } else {
                        --comments[index].likes;
                        comments[index].isLiked = false;
                    }
                    renderComments();
                });
            }
        });

        buttonLikeElement.classList.remove(status);
        //buttonLikeElement.classList.remove('-loading-like');
    });
};
