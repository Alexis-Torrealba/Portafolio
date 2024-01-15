function Skills() {
	return (
		<div
			className="flex flex-col justify-center  items-center mb-20"
			id="Skills"
		>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-white">Habilidades</h1>
				<img src="./assets/linea 124x10.svg" alt="" />
			</div>
			<div className=" flex flex-wrap lg:grid lg:grid-cols-4 items-center justify-center">
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64 border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/html.svg" alt="" />
					HTML 5
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/css.svg" alt="" />
					CSS 3
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/react.svg" alt="" />
					React
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/javascript.svg" alt="" />
					JavaScript
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/TailwindCSS.svg" alt="" />
					TailwindCSS
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64 border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/typescript.svg" alt="" />
					TypeScript
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img
						className="w-12"
						src="./assets/bootstrap-logo-5247297pJQ_brandlogos.net.svg"
						alt=""
					/>
					Bootstrap
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/git.svg" alt="" />
					Git
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/figma.svg" alt="" />
					Figma
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img src="./assets/pgsql.svg" alt="" />
					PostgreSQL
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
					<img
						className="w-12"
						src="
					./assets/PHP-Logo.wine.svg"
						alt=""
					/>
					PHP
				</button>
				<button className="flex rounded-lg border-[#293548] w-56  lg:w-64  border-2 b gap-4 p-2 lg:p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg ">
					<img className="w-12" src="./assets/MySQL-Logo.wine.svg" alt="" />
					MySql
				</button>
			</div>
		</div>
	);
}

export { Skills };
