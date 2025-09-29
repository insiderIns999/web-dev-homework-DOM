import { comments, updateComments } from "./comments.js";
import { initButtonLikes } from "./initButtonLikes.js";
import { ulElement } from "../index.js";
//import { buttonSendElement } from '../index.js';
import { answerComment } from "./answerComment.js";
import { getUserCommentDate } from "./userCommentDate.js";
import { deleteCommentFromList } from "./formAddComment.js";
import { token } from "./api.js";

export const deleteButtons = document.querySelectorAll('.delete-button');

export const renderComments = () => {
  const commentsHTML = comments
    .map((comment, index) => {
      return `
		<li class="comment">
		  <div class="comment-header">
			<div>${comment.author.name}</div>
			<div>${getUserCommentDate(comment.date)}</div>
		  </div>
		  <div class="comment-body">
			<div class="comment-text">
			  ${comment.text}
			</div>
		  </div>
		  <div class="comment-footer">
		  <div>
			<button data-index="${index}" class="delete-button" disabled>Удалить комментарий</button>
		  </div>
			<div class="likes">
			  <span class="likes-counter">${comment.likes}</span>
			  <button class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
			</div>
		  </div>
		</li>
		`;
    })
    .join("");

  ulElement.innerHTML = commentsHTML;
  initButtonLikes();
  deleteCommentFromList();
  answerComment();
  if(token != null) {
	deleteButtons.forEach((deleteButton) => {
		deleteButton.disabled = false;
		deleteButton.classList.add('auth-delete-button');
	});
  }
};
