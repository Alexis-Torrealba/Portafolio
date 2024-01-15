function Buttons(text, imag) {
	return (
		<button className="flex rounded-lg border-[#293548] w-64 border-2 b gap-4 p-4 m-2 text-white text-2xl hover:shadow-[#2C66C3] shadow-lg">
			<img src={imag} alt="" />
			{text}
		</button>
	);
}

export { Buttons };
