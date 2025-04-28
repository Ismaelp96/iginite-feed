import { Avatar } from '../avatar/Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';
export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div>
				<img
					src='https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='capa de perfil'
					title='capa de perfil'
					className={styles.coverImg}
				/>
				<div className={styles.profile}>
					<Avatar src={'https://github.com/ismaelp96.png'} />
					<strong>Ismael Conceição</strong>
					<span>Web Developer</span>
				</div>
				<div className={styles.edit}>
					<a href='#' className='btn btn-outline'>
						<PencilSimpleLine size={20} />
						Editrar seu perfil
					</a>
				</div>
			</div>
		</aside>
	);
}
