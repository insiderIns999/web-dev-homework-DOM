import { token } from "./api.js";
import { deleteComment } from "./api.js";
import { comments } from "./comments.js";

export function deleteButtonsActive() {
    if(token != null) {
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((deleteButton) => {
            deleteButton.disabled = false;
            deleteButton.classList.add('auth-delete-button');
        });
    }
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