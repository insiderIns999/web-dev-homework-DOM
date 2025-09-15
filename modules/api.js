const commentsURL = 'https://wedev-api.sky.pro/api/v2/oleg-gagarin/comments';

export function takeAndRender() {
  return fetch(commentsURL);
};