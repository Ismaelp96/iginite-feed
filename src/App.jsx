import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post />
				</main>
			</div>
		</div>
	);
}

export default App;
