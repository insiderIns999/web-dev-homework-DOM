import { comments } from './comments.js';
import { initButtonLikes } from './initButtonLikes.js';
import { ulElement, buttonSendElement } from '../index.js';
import { addComment } from './addComment.js';
import { answerComment } from './answerComment.js';

export const renderComments = () => {
	const commentsHTML = comments.map((comment) => {
		return `
		<li class="comment">
		  <div class="comment-header">
			<div>${comment.userName}</div>
			<div>${comment.userDate}</div>
		  </div>
		  <div class="comment-body">
			<div class="comment-text">
			  ${comment.commentText}
			</div>
		  </div>
		  <div class="comment-footer">
			<div class="likes">
			  <span class="likes-counter">${comment.likes}</span>
			  <button class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
			</div>
		  </div>
		</li>
		`;
	}).join('');
  
	ulElement.innerHTML = commentsHTML;
	initButtonLikes();
	buttonSendElement.addEventListener('click', addComment);
	answerComment();
}