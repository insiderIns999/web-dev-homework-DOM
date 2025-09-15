const renderAddCommentForm = () => {
    return `
    <div class="add-form">
        <input type="text" class="add-form-name" placeholder="Введите ваше имя" />
        <textarea id="textarea" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
        <div class="add-form-row">
            <button id="btn" class="add-form-button">Написать</button>
        </div>
    </div>
    `;
}