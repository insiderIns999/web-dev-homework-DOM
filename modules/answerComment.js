/*
import { userNameElement, userCommentElement } from "../index.js";
import { comments } from "./comments.js";
import { replaceAllTags } from "./replaceAll.js";

export const answerComment = () => {
  const liElements = document.querySelectorAll(".comment");
  liElements.forEach((liElement, index) => {
    liElement.addEventListener("click", () => {
      const authorName = comments[index].author.name;
      const authorComment = comments[index].text;
      userCommentElement.value =
        "> " + authorName + "\n > " + authorComment + "<br />";
        
        const answerButton = document.getElementById('btn');
        answerButton.textContent = 'Ответить на комментарий';
        const textarea = document.getElementById('textarea');
        textarea.addEventListener('focus', () => {
            userCommentElement.value = '';
        });
        answerButton.addEventListener('click', () => {
            console.log('ответ');
            fetch("https://wedev-api.sky.pro/api/v1/oleg-gagarin/comments", {
                method: "POST",
                body: JSON.stringify({
                    name: replaceAllTags(userNameElement),
                    text: "<div class=\"quote\">" + authorName + ":\n" + authorComment + "</div>" + replaceAllTags(userCommentElement),
                    forceError: true,
                }),
            })
            .then((response) => {
                if (response.status == 201) return response.json();
                else {
                    blockForm[0].style.display = "flex";
                    userNameElement.value = userNameBeforeSending;
                    userCommentElement.value = userCommentBeforeSending;
                    if (response.status == 400) throw new Error("Слишком короткое имя и/или текст комментария");
                    if (response.status == 500) {
                        answerComment();
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
                answerButton.textContent = 'Написать';  
            });
        });
    });
  });
};
*/