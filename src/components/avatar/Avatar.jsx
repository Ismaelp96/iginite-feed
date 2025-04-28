import styles from './Avatar.module.css';

export function Avatar({ src, hasBorder = true }) {
	return (
		<img
			src={src}
			alt='avatar'
			title='avatar'
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
		/>
	);
}
