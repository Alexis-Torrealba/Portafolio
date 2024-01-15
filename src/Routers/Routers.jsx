import { Route } from 'react-router-dom';
import { Projects } from 'src/components/Projects.jsx';
import { Skills } from 'src/components/Skills.jsx';
import { Footer } from 'src/components/Footer.jsx';
import { App } from 'src/App.jsx';

function Routers() {
	return (
		<div>
			<Route path="/" exact Component={App}></Route>
			<Route path="/Projects" Component={Projects}></Route>
			<Route path="/Skills" Component={Skills}></Route>
			<Route path="/Footer" Component={Footer}></Route>
		</div>
	);
}

export { Routers };
