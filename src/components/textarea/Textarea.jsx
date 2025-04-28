import styles from './Textarea.module.css';
export function Textarea({ name, onChange, value }) {
	return (
		<textarea
			type='text'
			name={name}
			placeholder='Escreva um comentário...'
			className={styles.textarea}
			value={value}
			onChange={onChange}
		/>
	);
}
