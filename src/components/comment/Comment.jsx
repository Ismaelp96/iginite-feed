import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../avatar/Avatar';

export function Comment({ content, onDeleteComment }) {
	function handleDeleteComment() {
		onDeleteComment(content);
	}
	return (
		<div className={styles.comment}>
			<div className={styles.contentComment}>
				<Avatar src='https://github.com/ismaelp96.png' hasBorder={false} />
				<div className={styles.contentInfo}>
					<div>
						<h5>
							Ismael Conceição <span>(você)</span>
						</h5>
						<time dateTime='2025-04-28 09:13:30' title='28 de abril às 09:13'>
							Cerca de 2h
						</time>
						<p>{content}</p>
					</div>
					<button
						className={styles.delete}
						title='Deletar comentário'
						onClick={handleDeleteComment}>
						<Trash size={24} />
					</button>
				</div>
			</div>
			<div className={styles.commentActions}>
				<ThumbsUp size={24} className={styles.like} title='Curtir' />
				<span> 3</span>
			</div>
		</div>
	);
}
