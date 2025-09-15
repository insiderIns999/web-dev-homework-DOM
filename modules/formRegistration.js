import { ulElement } from "../index.js";

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
            <button id="reg-button" class="add-form-button" disabled>Зарегистрироваться</button>
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
    });
}