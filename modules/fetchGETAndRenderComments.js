import { updateComments } from './comments.js';
import { renderComments } from './renderComments.js';
import { titleH3 } from '../index.js';

export const fetchGETAndRenderComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateComments(data.comments);
            renderComments();
            titleH3.style.display = 'none';
        });

}