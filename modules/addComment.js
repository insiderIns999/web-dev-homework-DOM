import { initButtonLikes } from "./initButtonLikes.js";
import { replaceAllTags } from "./replaceAll.js";
import { renderCommentsList } from "./fetchGETAndRenderComments.js";
import { addNewComment } from "./api.js";
import { userNameFromApi } from "../index.js";

export let likesCounter = 0;

export const addingComment = () => {
  const userNameElement = document.querySelector('.add-form-name');
  const userCommentElement = document.querySelector('.add-form-text');
  const buttonSendElement = document.querySelector('.add-form-button');
  buttonSendElement.addEventListener('click', () => {
    console.log('новый коммент');
    if (!userNameElement.value.trim() || !userCommentElement.value.trim()) {
      userNameElement.style.backgroundColor = "#f00";
      userCommentElement.style.backgroundColor = "#f00";
      alert("Пожалуйста заполните все поля");
    } 
    else {
      const blockLoader = document.getElementById("comment-loader");
      const blockForm = document.getElementsByClassName("add-form");

      blockForm[0].style.display = "none";
      blockLoader.style.display = "block";

      const commentReplaced = replaceAllTags(userCommentElement.value);

      addNewComment({ text: commentReplaced })
      .then((response) => {
        if (response.status == 201) return response.json();
        else {
          blockForm[0].style.display = "flex";
          userCommentElement.value = userCommentBeforeSending;
          if (response.status == 400) throw new Error("Слишком короткий текст комментария");
          else if (response.status == 500) addingComment();
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