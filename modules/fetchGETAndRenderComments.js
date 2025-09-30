import { updateComments } from "./comments.js";
import { renderComments } from "./renderComments.js";
import { titleH3 } from "../index.js";
import { getUserCommentDate } from "./userCommentDate.js";
import { takeAndRender } from "./api.js";

export const renderCommentsList = () => {
  return takeAndRender()
    .then((response) => {
      return response.json();
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
