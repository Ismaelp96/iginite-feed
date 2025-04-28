import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/ismaelp96.png',
			name: 'Ismael Conceição',
			role: 'Paint Developer',
		},
		content: [
			{ type: 'paraghaph', content: 'Fala galeraa' },
			{
				type: 'paraghaph',
				content: 'Acabei de subir mais uma pintura para o meu portifolio',
			},
			{ type: 'link', content: 'https://github.com/ismaelp96' },
		],
		publishedAt: new Date('2025-04-28 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/PAULOafs.png',
			name: 'Paulo Alvares',
			role: 'Backend Developer',
		},
		content: [
			{ type: 'paraghaph', content: 'Fala galeraa' },
			{
				type: 'paraghaph',
				content: 'Acabei de subir mais um projeto no backend ',
			},
			{ type: 'link', content: 'https://github.com/PAULOafs' },
		],
		publishedAt: new Date('2025-04-20 20:00:00'),
	},
];

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								publishedAt={post.publishedAt}
								content={post.content}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
