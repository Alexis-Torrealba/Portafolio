import Swal from 'sweetalert2';

function Modal(title, subTitle, image, Repos, demoURL) {
	Swal.fire({
		html: `
    <div class="container">
    <img 
								src=${image}
								alt=""
							/>
    <h1 class="title">${title}</h1>
    <p class="descrip">${subTitle}</p>
    <div class="ContaBtn">
    <button class="buttons"><a class="ancla" href=${Repos} target="_blank"> <i class="fa-brands fa-github"></i><p>Repositorio</p></a></button>
    <button class="buttons"><a class="ancla" href=${demoURL} target="_blank"><i class="fa-solid fa-globe"  style="color: #83CBF5; padding-left:10px"></i><p>Demo</p></a></button>
    </div>
    </div>
    `,
		showConfirmButton: false,
		showCloseButton: true,
		width: '50%',
		background: '#1E293B',
		color: 'White',
	});
}

export { Modal };
