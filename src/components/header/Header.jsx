import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';
const Header = () => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt='logo' title='logo' />
			<h1>Iginite Feed</h1>
		</header>
	);
};

export default Header;
