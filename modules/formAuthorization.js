import { ulElement, upload } from "../index.js";
import { registrationForm } from "./formRegistration.js";
import { login } from "./api.js";
import { updateUserName } from "../index.js";
import { updateToken } from "./api.js";
import { renderAddCommentForm } from "./formAddComment.js";

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

        const buttonElement = document.getElementById('auth-button');
        const loginInputElement = document.getElementById('user-login');
        const passwordInputElement = document.getElementById('user-password');
        //const userArr = [loginInputElement, passwordInputElement];
/*
        for (let j = 0; j < userArr.length; j++) {
            userArr[j].addEventListener('input', () => {
                if (userArr.every((el) => el.value !== '')) {
                    return buttonElement.disabled = false;
                }
                else {
                    return buttonElement.disabled = true;
                }
            });
        };
*/
        buttonElement.addEventListener('click', () => {
            login({
                login: loginInputElement.value,
                password: passwordInputElement.value,
            })
            .then((responseData) => {
                updateUserName(responseData.user.name); //localStorage.setItem('name', responseData.user.name);
                updateToken(responseData.user.token); //localStorage.setItem('token', responseData.user.token);
                return renderAddCommentForm();
            })
            .catch((err) => {
                alert(err.message);
            })
        });
    });
}