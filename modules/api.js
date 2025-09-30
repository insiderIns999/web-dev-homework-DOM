import { renderCommentsList } from "./fetchGETAndRenderComments.js";

const commentsURL = 'https://wedev-api.sky.pro/api/v2/oleg-gagarin/comments';
const authorizationURL = 'https://wedev-api.sky.pro/api/user/login';
const regURL = 'https://wedev-api.sky.pro/api/user';

export let token;
export const updateToken = (newToken) => {
  token = newToken;
};

export function takeAndRender() {
  return fetch(commentsURL);
};

export function login({ login, password }) {

  return fetch(authorizationURL, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    })
  })
  .then((response) => {
    if(response.status === 400) {
      throw new Error('Неверный логин или пароль');
    }
    if(response.status === 500) {
      throw new Error('Сервер упал');
    }
    return response.json();
  });
};

export function registration({ login, name, password }) {
  return fetch(regURL, {
    method: 'POST',
    body: JSON.stringify({
      login,
      name,
      password,
    })
  })
  .then((response) => {
    if(response.status === 400) {
      throw new Error('Пользователь с таким логином уже зарегистрирован');
    }
    if(response.status === 500) {
      throw new Error('Сервер упал');
    }
    return response.json();
  });
};

export function addNewComment({ text }) {
  return fetch(commentsURL, {
    method: 'POST',
    body: JSON.stringify({
      'text': text,
      forceError: true,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export function deleteComment({ id }) {
  return fetch(`${commentsURL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(() => {
    return takeAndRender();
  })
  .then(() => {
    return renderCommentsList();
  });
}

export function switchLikes({ id }) {
    return fetch(`${commentsURL}/${id}/toggle-like`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(() => {
    return takeAndRender();
  })
  .then(() => {
    return renderCommentsList();
  });
}