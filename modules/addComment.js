import { userNameElement, userCommentElement, likesCounter } from '../index.js';
import { getUserCommentDate } from './userCommentDate.js';
import { initButtonLikes } from './initButtonLikes.js';
import { renderComments } from './renderComments.js';
import { comments } from './comments.js';
import { replaceAllTags } from './replaceAll.js';

export function addComment() {
  if(userNameElement.value == '' || userNameElement.value == ' ' || userCommentElement.value == '' || userCommentElement.value == ' ') {
	userNameElement.style.backgroundColor = '#f00';
	userCommentElement.style.backgroundColor = '#f00';
	alert('Пожалуйста заполните все поля');
  }
  else {
    const nameReplaced = replaceAllTags(userNameElement.value);
    const commentReplaced = replaceAllTags(userCommentElement.value)

	comments.push(
		{
			userName: nameReplaced,
			commentText: commentReplaced,
			userDate: getUserCommentDate(),
			likes: likesCounter,
			isLiked: false
		}
	);
	userNameElement.value = '';
	userCommentElement.value = '';
	initButtonLikes();
	renderComments();
  }
}