import { comments, updateComments } from "./comments.js";
import { initButtonLikes } from "./initButtonLikes.js";
import { ulElement } from "../index.js";
//import { buttonSendElement } from '../index.js';
//import { answerComment } from "./answerComment.js";
import { getUserCommentDate } from "./userCommentDate.js";

export const renderComments = () => {
  const commentsHTML = comments
    .map((comment) => {
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
  //answerComment();
};
