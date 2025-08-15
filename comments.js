"use strict";
const userNameElement = document.querySelector('.add-form-name');
const userCommentElement = document.querySelector('.add-form-text');
const buttonSendElement = document.querySelector('.add-form-button');
const ulElement = document.querySelector('.comments');

function getUserCommentDate() {
  const date = new Date();
  const userDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const userMonth = (date.getMonth() + 1 < 10) ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
  const userYear = date.getFullYear().toString().substr(-2);
  const userHours = (date.getHours() < 10) ? ("0" + date.getHours()) : (date.getHours());
  const userMinutes = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : (date.getMinutes());
  return `${userDate}.${userMonth}.${userYear} ${userHours}:${userMinutes}`;
  //return format(getUserCommentDate, 'yyyy-MM-dd hh.mm.ss');
}

let likesCounter = 0;

let comments = [
  {
	userName: 'Глеб Фокин',
	commentText: 'Это будет первый комментарий на этой странице',
	userDate: getUserCommentDate(),
	likes: 3,
	isLiked: false
  },
  {
	userName: 'Варвара Н.',
	commentText: 'Мне нравится как оформлена эта страница! ❤',
	userDate: getUserCommentDate(),
	likes: 75,
	isLiked: true
  }
];

userNameElement.addEventListener('input', () => {
  userNameElement.style.backgroundColor = '#fff';
});
userCommentElement.addEventListener('input', () => {
  userCommentElement.style.backgroundColor = '#fff';
});

const initButtonLikes = () => {
	const buttonsLikesElements = document.querySelectorAll('.like-button');
	buttonsLikesElements.forEach((buttonLikeElement, index) => {
		buttonLikeElement.addEventListener('click', (event) => {
			event.stopPropagation();
			if (!comments[index].isLiked) {
				++comments[index].likes;
				comments[index].isLiked = true;
			}
			else {
				--comments[index].likes;
				comments[index].isLiked = false;
			}
			renderComments();
		});
	});
}

function addComment() {
  if(userNameElement.value == '' || userCommentElement.value == '') {
	userNameElement.style.backgroundColor = '#f00';
	userCommentElement.style.backgroundColor = '#f00';
	alert('Пожалуйста заполните все поля');
  }
  else {
	comments.push(
		{
			userName: userNameElement.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
			commentText: userCommentElement.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
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

const answerComment = () => {
	const liElements = document.querySelectorAll('.comment');
	liElements.forEach((liElement, index) => {
		liElement.addEventListener('click', () => {
			userCommentElement.value = "> " + comments[index].userName + "\n \n > " + comments[index].commentText + "<br />";
		});
	});
}
  
const renderComments = () => {
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

renderComments();

console.log("It works!");
console.log('Complete');