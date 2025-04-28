import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from './Post.module.css';

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import { Textarea } from '../textarea/Textarea';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState({
		allComments: ['Post muito bacana, hein?!'],
		newCommentText: '',
	});

	format(publishedAt, "dd 'de' MMMM 'as' HH:mm", {
		locale: ptBR,
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});
	const handleCreateNewComment = (e) => {
		e.preventDefault();
		setComments({
			allComments: [...comments.allComments, comments.newCommentText],
			newCommentText: '',
		});
	};

	const handleNewCommentChange = (e) => {
		e.preventDefault();
		e.target.setCustomValidity('');
		setComments({ ...comments, newCommentText: e.target.value });
	};

	function handleNewCommentInvalid(e) {
		e.target.setCustomValidity('Esse campo é obrigatório!');
	}

	const deleteComment = (commentToDelete) => {
		const commentsWithoutDeletedOne = comments.allComments.filter((comment) => {
			return comment !== commentToDelete;
		});
		setComments({ allComments: commentsWithoutDeletedOne });
	};

	const isNewcommentEmpty = comments.newCommentText.length === 0;
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateRelativeToNow}
					dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((line, i) => {
					if (line.type === 'paraghaph') {
						return <p key={i}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={i}>
								<a href={line.content}>{line.content}</a>
							</p>
						);
					}
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.comments}>
				<h4>Deixe seu Feedback</h4>
				<Textarea
					name={'comment'}
					onChange={handleNewCommentChange}
					value={comments.newCommentText}
					onInvalid={handleNewCommentInvalid}
				/>
				<div className={styles.footer}>
					<button
						type='submit'
						title='Digite um comentário'
						className='btn btn-normal'
						disabled={isNewcommentEmpty}>
						Publicar
					</button>
				</div>
			</form>
			<div className={styles.commentsList}>
				{comments.allComments.map((comment) => (
					<Comment
						key={comment}
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
