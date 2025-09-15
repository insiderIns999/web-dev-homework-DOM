import { ulElement, upload } from "../index.js";
import { registrationForm } from "./formRegistration.js";

export const authorizationForm = () => {
    const authorizationLink = document.getElementById('auth-link');
    authorizationLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        const divApp = document.getElementById('app');
        const authFormHTML = `
        <div id="form-auth" class="add-form auth-form">
            <input id="user-login" type="text" name="login" class="auth-form-input add-form-name" placeholder="Введите логин" />
            <br />
            <input id="user-password" type="password" name="password" class="auth-form-input add-form-name" placeholder="Введите пароль" />
            <div class="add-form-row auth-form-row">
            <button id="auth-button" class="auth-form-button add-form-button" disabled>Войти</button>
            </div>
            <p class="white">Если не зарегистрированы,
            <a class="a-white" id="link-reg" href="#"> Зарегистрируйтесь</a>
        </div>
        <div id="uploading-data" class="uploading-data">
            <img class="uploader" src="loader.gif" alt="Индикатор загрузки" />
            <p>Выполняется авторизация...</p>
        </div>
        `;

        document.getElementById('authP').style.display = 'none';
        ulElement.style.display = 'none';
        divApp.innerHTML = authFormHTML;
        const regLinkToForm = document.getElementById('link-reg');
        regLinkToForm.addEventListener('click', registrationForm);
    });
}