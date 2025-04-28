import { HandsClapping, Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Comment.module.css';

import { Avatar } from '../avatar/Avatar';

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0);
	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		});
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
			<div className={styles.commentAction}>
				<button onClick={handleLikeComment}>
					<HandsClapping size={24} className={styles.like} title='Aplaudir' />
				</button>
				<span>{likeCount}</span>
			</div>
		</div>
	);
}
