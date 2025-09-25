import { updateComments } from "./comments.js";
import { renderComments } from "./renderComments.js";
import { titleH3 } from "../index.js";
import { getUserCommentDate } from "./userCommentDate.js";
import { takeAndRender } from "./api.js";

export const renderCommentsList = () => {
  return takeAndRender()
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
      const dataComments = data.comments;
      dataComments.forEach((dataComment) => {
        getUserCommentDate(dataComment.date);
      });
      renderComments();
      titleH3.style.display = "none";
    })
    .catch((error) => {
      alert(error.message);
    });
}
