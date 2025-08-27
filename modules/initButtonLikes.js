import { renderComments } from './renderComments.js';
import { comments } from './comments.js';

function delay(interval = 300) {
   return new Promise((resolve) => {
      setTimeout(() => {
      resolve();
      }, interval);
   });
}

export const initButtonLikes = () => {
    const buttonsLikesElements = document.querySelectorAll('.like-button');
    buttonsLikesElements.forEach((buttonLikeElement, index) => {
        buttonLikeElement.addEventListener('click', (event) => {
            event.stopPropagation();
            buttonLikeElement.classList.add('-loading-like');
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
        });
        buttonLikeElement.classList.remove('-loading-like');
    });
};
