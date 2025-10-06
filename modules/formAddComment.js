import { replaceAllTags } from "./replaceAll.js";
import { userNameFromApi } from "../index.js";

export const renderAddCommentForm = () => {
    const divApp = document.getElementById('app');
    const addCommentFormHTML =  `
    <div class="add-form">
        <input id="input-user-name-addComment" type="text" class="add-form-name" placeholder="Введите ваше имя" />
        <textarea id="textarea" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
        <div class="add-form-row">
            <button id="btn" class="add-form-button">Написать</button>
        </div>
    </div>
    `;

    const commentsList = document.querySelector('.comments');
    commentsList.style.display = 'flex';
    divApp.innerHTML = addCommentFormHTML;

    const userNameElement = document.getElementById('input-user-name-addComment');
    const nameReplaced = replaceAllTags(userNameFromApi);
    userNameElement.value = nameReplaced;
    userNameElement.disabled = true;
}