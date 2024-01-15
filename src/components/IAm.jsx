function IAm() {
	return (
		<div className="flex flex-wrap justify-center py-20 gap-10 w-auto ">
			<div className="flex items-center justify-center w-72 lg:w-96 animate-fade-down animate-once animate-duration-1000">
				<img src="./assets/1de0c54f-f75d-47a9-b560-9be3bad2dc441.png" alt="" />
			</div>
			<div className="flex flex-col items-center justify-center animate-fade-left animate-once animate-duration-1000">
				<div className="flex items-center justify-end">
					<div className="animate-wiggle-more animate-infinite animate-duration-[-50ms]">
						<img src="./assets/Mano Saluda desktop.png" alt="" />
					</div>
					<h2 className="text-4xl text-white">Hola, Soy</h2>
				</div>
				<div className="">
					<h1 className="text-6xl text-white text-center">AlexisDev</h1>
				</div>
				<div className="flex flex-col justify-center]">
					<p className="text-center text-5xl text-[#4f83d6]">
						{'<>'}Frontend Developer {'</>'}
					</p>
				</div>
			</div>
		</div>
	);
}

export { IAm };
