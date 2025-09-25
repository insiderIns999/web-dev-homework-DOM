import { initButtonLikes } from "./initButtonLikes.js";
import { replaceAllTags } from "./replaceAll.js";
import { renderCommentsList } from "./fetchGETAndRenderComments.js";
import { addNewComment } from "./api.js";
import { userNameElement, userCommentElement } from "../index.js";

export let likesCounter = 0;

export const addingComment = () => {
  const buttonSendElement = document.querySelector('.add-form-button');
  buttonSendElement.addEventListener('click', () => {
    console.log('новый коммент');
  if (
    userNameElement.value == "" ||
    userNameElement.value == " " ||
    userCommentElement.value == "" ||
    userCommentElement.value == " "
  ) {
    userNameElement.style.backgroundColor = "#f00";
    userCommentElement.style.backgroundColor = "#f00";
    alert("Пожалуйста заполните все поля");
  } else {
      const blockLoader = document.getElementById("comment-loader");
      const blockForm = document.getElementsByClassName("add-form");

      blockForm[0].style.display = "none";
      blockLoader.style.display = "block";

      const userNameBeforeSending = userNameElement.value;
      const userCommentBeforeSending = userCommentElement.value;

      const nameReplaced = replaceAllTags(userNameElement.value);
      const commentReplaced = replaceAllTags(userCommentElement.value);

      addNewComment()
      .then((response) => {
        if (response.status == 201) return response.json();
        else {
          blockForm[0].style.display = "flex";
          userNameElement.value = userNameBeforeSending;
          userCommentElement.value = userCommentBeforeSending;
          if (response.status == 400) throw new Error("Слишком короткое имя и/или текст комментария");
          if (response.status == 500) addingComment();
        }
      })
      .then(() => {
        return renderCommentsList();
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        blockForm[0].style.display = "flex";
        blockLoader.style.display = "none";
      });
      userNameElement.value = "";
      userCommentElement.value = "";
      initButtonLikes();
    }
  });
};