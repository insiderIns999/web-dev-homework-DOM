import { userNameElement, userCommentElement, likesCounter } from "../index.js";
import { initButtonLikes } from "./initButtonLikes.js";
import { replaceAllTags } from "./replaceAll.js";
import { fetchGETAndRenderComments } from "./fetchGETAndRenderComments.js";

export function addComment() {
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

    fetch("https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments", {
      method: "POST",
      body: JSON.stringify({
        name: nameReplaced,
        text: commentReplaced,
        forceError: true,
      }),
    })
      .then((response) => {
        if (response.status == 201) return response.json();
        else {
          blockForm[0].style.display = "flex";
          userNameElement.value = userNameBeforeSending;
          userCommentElement.value = userCommentBeforeSending;
          if (response.status == 400)
            throw new Error("Слишком короткое имя и/или текст комментария");
          if (response.status == 500) {
            addComment();
          }
        }
      })
      .then(() => {
        return fetchGETAndRenderComments();
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        blockForm[0].style.display = "flex";
        blockLoader.style.display = "none";
      });

    /*
        comments.push({
            userName: nameReplaced,
            commentText: commentReplaced,
            userDate: getUserCommentDate(),
            likes: likesCounter,
            isLiked: false,
        });
        */
    userNameElement.value = "";
    userCommentElement.value = "";
    initButtonLikes();
  }
}
