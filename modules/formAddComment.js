import { replaceAllTags } from "./replaceAll.js";
import { userNameFromApi } from "../index.js";
import { deleteComment } from "./api.js";
import { comments } from "./comments.js";
import { deleteButtonsActive } from "./deleteButtons.js";

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

export const deleteCommentFromList = () => {
    const deleteButtonsElements = document.querySelectorAll('.delete-button');
    for(const deleteButtonElement of deleteButtonsElements) {
        deleteButtonElement.addEventListener('click', (event) => {
            event.stopPropagation();
            
            deleteButtonElement.style.backgroundColor = '#efefef';
            deleteButtonElement.style.color = '#000';
            deleteButtonElement.textContent = 'Комментарий удаляется...';
            
            const index = deleteButtonElement.dataset.index;
            const id = comments[index].id;
            deleteButtonsActive();
            deleteComment({ id });
        });
    }
}