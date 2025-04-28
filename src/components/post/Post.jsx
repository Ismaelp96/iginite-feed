import { Textarea } from '../textarea/Textarea';
import styles from './Post.module.css';
export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						src='https://github.com/ismaelp96.png'
						alt='avatar'
						title='avatar'
						className={styles.avatar}
					/>
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
			<div className={styles.comments}>
				<h4>Deixe seu Feedback</h4>
				<Textarea />
			</div>
		</article>
	);
}
