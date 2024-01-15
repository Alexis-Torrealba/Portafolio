import { HiOutlineMail } from 'react-icons/hi';
function Footer() {
	return (
		<div className="h-60" id="Footer">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-white">Contactos</h1>
				<img src="src/assets/linea 124x10.svg" alt="" />
			</div>
			<div className="flex items-center justify-center gap-4">
				<a
					href="https://www.linkedin.com/in/alexis-torrealba-correa/"
					target="_black"
				>
					<button className="flex items-center justify-center bg-[#161B22] h-12 w-12 rounded-full hover:shadow-[#2C66C3] hover:bg-[#2C66C3] shadow-lg">
						<img src="src/assets/Linkedin.svg" alt="" />
					</button>
				</a>
				<a href="https://github.com/Alexis-Torrealba" target="_black">
					<button className="flex items-center justify-center bg-[#161B22] h-12 w-12 rounded-full hover:shadow-[#2C66C3] hover:bg-[#2C66C3] shadow-lg">
						<img src="src/assets/GitHub.svg" alt="" />
					</button>
				</a>
				<a
					href="https://mail.google.com/mail/u/1/#inbox?compose=new"
					target="_black"
				>
					<button className="flex items-center justify-center bg-[#161B22] h-12 w-12 rounded-full hover:shadow-[#2C66C3] hover:bg-[#2C66C3] shadow-lg">
						<HiOutlineMail className="text-4xl text-white" />
					</button>
				</a>
			</div>
		</div>
	);
}

export { Footer };
