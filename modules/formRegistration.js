import { ulElement, updateUserName } from "../index.js";
import { addingComment } from "./addComment.js";
import { registration, login, updateToken } from './api.js';
import { renderAddCommentForm } from "./formAddComment.js";

function replaceSymbols(string) {
    return string.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('QUOTE_BEGIN', '<div class="quote">').replaceAll('QUOTE_END', '</div><br /><br />');
}

export const registrationForm = () => {
    const registrationLink = document.getElementById('link-reg');
    registrationLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        const divApp = document.getElementById('app');
        const regFormHTML = `
        <div id="form-reg" class="add-form reg-form">
            <input id="user-name" type="text" name="name" class="add-form-name" placeholder="Введите имя" />
            <br />
            <input id="user-login" type="text" name="login" class="add-form-name" placeholder="Введите логин" />
            <br />
            <input id="user-password" type="password" name="password" class="add-form-name" placeholder="Введите пароль" />
            <div class="add-form-row reg-form-row">
            <button id="reg-button" class="add-form-button">Зарегистрироваться</button>
            </div>
            <a id="authorization-button" class="a-white" href="#">Войти</a>
        </div>
        <div id="uploading-data" class="uploading-data">
            <img class="uploader" src="loader.gif" alt="Индикатор загрузки" />
            <p>Выполняется регистрация...</p>
        </div>
        `;

        document.getElementById('authP').style.display = 'none';
        ulElement.style.display = 'none';
        divApp.innerHTML = regFormHTML;
        const authorizationLinkRegForm = document.getElementById('authorization-button');
        authorizationLinkRegForm.addEventListener('click', (event) => {
            event.preventDefault();
        
            const divApp = document.getElementById('app');
            const authFormHTML = `
            <div id="form-auth" class="add-form auth-form">
                <input id="user-login" type="text" name="login" class="auth-form-input add-form-name" placeholder="Введите логин" />
                <br />
                <input id="user-password" type="password" name="password" class="auth-form-input add-form-name" placeholder="Введите пароль" />
                <div class="add-form-row auth-form-row">
                <button id="auth-button" class="auth-form-button add-form-button">Войти</button>
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
            buttonElement.addEventListener('click', () => {
                login({
                    login: replaceSymbols(document.getElementById('user-login').value),
                    password: document.getElementById('user-password').value,
                })
                .then((responseData) => {
                    updateUserName(responseData.user.name); //localStorage.setItem('name', responseData.user.name);
                    updateToken(responseData.user.token); //localStorage.setItem('token', responseData.user.token);
                    renderAddCommentForm();
                    addingComment();
                })
                .catch((err) => {
                    alert(err.message);
                })
            });
        });

        const registrationButtonElement = document.getElementById('reg-button');
        registrationButtonElement.addEventListener('click', () => {
            console.log('OK');
            
            let replaceLogin = replaceSymbols(document.getElementById('user-login').value);
            let replaceName = replaceSymbols(document.getElementById('user-name').value);
            
            registration({
                login: replaceLogin,
                name: replaceName,
                password: document.getElementById('user-password').value,
            })
            .then(() => {
                alert('Вы успешно зарегистрировались'); 
            })
        });
    });
}