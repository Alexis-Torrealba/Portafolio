import { IAm } from './components/IAm';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<IAm />
				<Projects />
				<Skills />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export { App };
