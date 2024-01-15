import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importa el icono de barras (puedes usar otro)

function Header() {
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	const scrollToElement = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			// Cierra el menú después de hacer clic en un enlace (opcional)
			setMenuVisible(false);
		}
	};

	return (
		<div className="w-full lg:w-auto py-6 px-4 lg:px-20">
			{/* Icono de menú para pantallas pequeñas */}
			<div className="lg:hidden md:hidden">
				<FaBars className="text-3xl" color="white" onClick={toggleMenu} />
			</div>

			{/* Menú para pantallas grandes */}
			<div
				className={`flex flex-col sm:flex sm:flex-row lg:flex-row md:flex-row justify-end items-center gap-5 text-white font-Roboto text-xl font-normal cursor-pointer list-none  ${
					menuVisible ? '' : 'hidden'
				}`}
			>
				<Link className="lg:bg-[#2C66C3] lg:hover:bg-[#2C66C3] rounded-full py-2 px-4 lg:py-2 lg:px-4">
					Inicio
				</Link>
				<Link
					className="lg:hover:bg-[#2C66C3] rounded-full py-2 px-4 lg:py-2 lg:px-4"
					to="/Projects"
					onClick={() => scrollToElement('Projects')}
				>
					Proyectos
				</Link>
				<Link
					className="lg:hover:bg-[#2C66C3] rounded-full py-2 px-4 lg:py-2 lg:px-4"
					to="/Skills"
					onClick={() => scrollToElement('Skills')}
				>
					Habilidades
				</Link>
				<Link
					className="lg:hover:bg-[#2C66C3] rounded-full py-2 px-4 lg:py-2 lg:px-4"
					to="/Footer"
					onClick={() => scrollToElement('Footer')}
				>
					Contacto
				</Link>
			</div>
		</div>
	);
}

export { Header };
