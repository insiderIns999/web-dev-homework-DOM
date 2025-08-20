import { getUserCommentDate } from './userCommentDate.js';

export let comments = [
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