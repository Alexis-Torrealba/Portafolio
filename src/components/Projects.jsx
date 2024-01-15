import { BsEyeFill } from 'react-icons/bs';
import { Modal } from './Modal';

function Projects() {
	const openModal = (title, subTitle, image, Repos, demoURL) => {
		Modal(title, subTitle, image, Repos, demoURL);
	};
	return (
		<div className="mb-20 animate-fade-right animate-once animate-duration-1000 animate-ease-in">
			{/** TITLE**/}
			<div
				className="flex flex-col justify-center items-center mb-6"
				id="Projects"
			>
				<h1 className="text-4xl text-white">Proyectos</h1>
				<img src="src/assets/linea 124x10.svg" alt="" />
			</div>
			{/** Card-Modals**/}
			<div className="flex justify-center gap-12">
				{/** col-one**/}
				<div>
					<div
						onClick={() =>
							openModal(
								'Fe y Alegría',
								'Web site diseñado y desarrollado para la empresa de "Fe y Alegría" esté proyecto quedo pendiente en producción por motivos internos de la empresa',
								'src/assets/Masterclass_Online_Course_Laptop_Instagram_Post-removebg-preview.png',
								'https://github.com/Alexis-Torrealba',
								'https://dev-feya.pantheonsite.io'
							)
						}
						className="cursor-pointer border-2 border-[#384f74] rounded-b-lg rounded-t-lg hover:shadow-[#2C66C3] shadow-lg animate-fade-down animate-once animate-ease-in animate-duration-[1000ms] "
					>
						<div className="rounded-t-lg">
							<img
								className="w-full h-52 rounded-t-lg hover:scale-95 transition duration-500 "
								src="src/assets/Captura de pantalla 2024-01-12 133244.png"
								alt=""
							/>
							<p className="flex items-center pl-4  bg-[#293548]  h-12 rounded-b-lg  text-white gap-2 text-xl">
								<BsEyeFill />
								Fe y Alegría
							</p>
						</div>
					</div>
					<div
						onClick={() => {
							openModal(
								'Diócesis de la Guaira',
								`Web site diseñado y desarrollado para la Diócesis de La Guaira para informar y mantener una biblioteca de archivos en la web, es una web dinámica y con un diseño actualizado, tiene una versión 2.0`,
								'src/assets/Masterclass_Online_Course_Laptop_Instagram_Post__1_-removebg-preview.png',
								'https://github.com/Alexis-Torrealba',
								'https://www.diocesisdelaguaira.com/index.html'
							);
							<a href="https://subdominio.diocesisdelaguaira.com">2.0</a>;
						}}
						className="my-12 cursor-pointer border-2 border-[#384f74] rounded-b-lg rounded-t-lg hover:shadow-[#2C66C3] shadow-lg animate-fade-down animate-once animate-ease-in animate-duration-[1000ms]"
					>
						<img
							className="w-full h-52 rounded-t-lg  hover:scale-95 transition duration-500"
							src="src/assets/Captura de pantalla 2024-01-12 133709.png"
							alt=""
						/>
						<p className="flex items-center pl-4 bg-[#293548] h-12 rounded-b-lg text-white gap-2 text-xl ">
							<BsEyeFill />
							Diócesis de la Guaira
						</p>
					</div>
				</div>
				{/** col-two**/}
				<div>
					<div
						onClick={() => {
							openModal(
								'To-do Personal',
								`Desarrollé un sistema de gestión de tareas (to-do list) como parte de mi portafolio. Esta aplicación, creada con JavaScript, me permite organizar eficientemente mis responsabilidades diarias. Puedo agregar nuevas tareas, marcarlas como completadas y eliminarlas según sea necesario. Este proyecto no solo demuestra mis habilidades en desarrollo web, sino que también destaca mi capacidad para crear soluciones prácticas que mejoran la productividad personal`,
								'src/assets/Masterclass_Online_Course_Laptop_Instagram_Post__3_-removebg-preview.png',
								'https://github.com/Alexis-Torrealba/App-To-do',
								'https://genuine-hamster-1a5fc6.netlify.app'
							);
						}}
						className="cursor-pointer border-2 border-[#384f74] rounded-b-lg rounded-t-lg hover:shadow-[#2C66C3] shadow-lg animate-fade-down animate-once animate-ease-in animate-duration-[1500ms]"
					>
						<img
							className="w-full h-52 rounded-t-lg hover:scale-95 transition duration-500"
							src="src/assets/Captura de pantalla 2024-01-12 135417.png"
							alt=""
						/>
						<p className="flex items-center pl-4 bg-[#293548] h-12 rounded-b-lg text-white gap-2 text-xl ">
							<BsEyeFill />
							To-do Personal
						</p>
					</div>
					<div
						onClick={() => {
							openModal(
								'U.E.P Escolanía',
								'La web de la Escolanía se erige como un espacio educativo virtual dedicado a proporcionar información integral y facilitar la interacción entre estudiantes, padres y personal educativo. Diseñada con un enfoque centrado en la experiencia del usuario, nuestra web ofrece acceso fácil y rápido a detalles esenciales como calendario académico, eventos, comunicados, y recursos educativos. Con una interfaz intuitiva y moderna, buscamos fortalecer la conexión entre la comunidad educativa y fomentar un entorno de aprendizaje colaborativo y enriquecedor',
								'src/assets/Masterclass_Online_Course_Laptop_Instagram_Post__2_-removebg-preview.png',
								'https://github.com/Alexis-Torrealba',
								'https://escolanianclg.com'
							);
						}}
						className="my-12 cursor-pointer border-2 border-[#384f74] rounded-b-lg rounded-t-lg hover:shadow-[#2C66C3] shadow-lg animate-fade-down animate-once animate-ease-in animate-duration-[1500ms]"
					>
						<img
							className="w-full h-52 rounded-t-lg hover:scale-95 transition duration-500"
							src="src/assets/Captura de pantalla 2024-01-12 134517.png"
							alt=""
						/>
						<p className="flex items-center pl-4 bg-[#293548] h-12 rounded-b-lg text-white gap-2 text-xl ">
							<BsEyeFill />
							U.E.P Escolanía
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Projects };
