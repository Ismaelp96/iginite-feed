import styles from './Textarea.module.css';
export function Textarea() {
	return (
		<textarea
			type='text'
			placeholder='Escreva um comentário...'
			className={styles.textarea}
		/>
	);
}
