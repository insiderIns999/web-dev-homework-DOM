import { comments } from "./comments.js";
import { replaceAllTags } from "./replaceAll.js";
import { token } from "./api.js";

export const answerComment = () => {
  const liElements = document.querySelectorAll(".comment");
  liElements.forEach((liElement, index) => {
    liElement.addEventListener("click", () => {
        if(!token) alert('Авторизуйтесь, чтобы ответить на комментарий');
        else {
            const authorName = comments[index].author.name;
            const authorComment = comments[index].text;
            const userCommentElement = document.getElementById('textarea');
            userCommentElement.value = 'QUOTE_BEGIN' + authorName + ':\n' + authorComment + 'QUOTE_END ';

            const answerButton = document.getElementById('btn');
            answerButton.textContent = 'Ответить на комментарий';
            
            answerButton.addEventListener('click', () => {
                fetch("https://wedev-api.sky.pro/api/v2/oleg-gagarin/comments", {
                    method: "POST",
                    body: JSON.stringify({
                        //name: replaceAllTags(userNameElement),
                        text: replaceAllTags(userCommentElement),
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
            });
        }
    });
  });
};