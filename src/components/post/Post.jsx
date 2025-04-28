import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import { Textarea } from '../textarea/Textarea';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState([1, 2]);
	format(publishedAt, "dd 'de' MMMM 'as' HH:mm", {
		locale: ptBR,
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});
	const handleCreateNewComment = (e) => {
		e.preventDefault();
		setComments([...comments, 3]);
		console.log(comments);
	};
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
				{content.map((item, i) => {
					return <p key={i}>{item.content}</p>;
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.comments}>
				<h4>Deixe seu Feedback</h4>
				<Textarea />
				<div className={styles.footer}>
					<button type='submit' className='btn btn-normal'>
						Publicar
					</button>
				</div>
			</form>
			<div className={styles.commentsList}>
				{comments.map((comment, i) => {
					return <Comment key={i} />;
				})}
			</div>
		</article>
	);
}
