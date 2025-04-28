import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import { Textarea } from '../textarea/Textarea';
import styles from './Post.module.css';
export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={'https://github.com/ismaelp96.png'} />
					<div className={styles.authorInfo}>
						<strong>Ismael Conceição</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time title='27 de abril às 22:23' dateTime='2025-04-27 22:23:30'>
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa </p>
				<p> Acabei de subir mais um projeto no meu portifolio</p>
			</div>
			<form className={styles.comments}>
				<h4>Deixe seu Feedback</h4>
				<Textarea />
				<div className={styles.footer}>
					<button type='submit' className='btn btn-normal'>
						Publicar
					</button>
				</div>
			</form>
			<div className={styles.commentsList}>
				<Comment />
			</div>
		</article>
	);
}
