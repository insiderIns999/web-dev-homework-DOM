import { updateComments } from "./comments.js";
import { renderComments } from "./renderComments.js";
import { titleH3 } from "../index.js";
import { getUserCommentDate } from "./userCommentDate.js";

export const fetchGETAndRenderComments = () => {
  return fetch("https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments/")
    .then((response) => {
      /*if (
        response.status == 200)*/ return response.json();
      /*else {
        if (response.status == 500)
          throw new Error("Нет соединения с сервером");
        if (response.status == 400) throw new Error("Что-то пошло не так");
      }*/
    })
    .then((data) => {
      updateComments(data.comments);
      getUserCommentDate(data.comments.date);
      renderComments();
      titleH3.style.display = "none";
    })
    .catch((error) => {
      alert(error.message);
    });
};
