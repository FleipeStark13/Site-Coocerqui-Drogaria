import logo from '../../../imgs/header-logo.png'
export default function Footer () {
	return (
		<footer>
			<ul>
				<div>
					<figure>
						<img src={logo} alt="Logo Coocerqui Drogaria" />
					</figure>
				</div>
				<div>
					<ul>
						<a href="#">Nossas Lojas</a>
						<a href="#">Fale Conosco</a>
						<a href="#">Tabloide Mensal</a>
					</ul>
				</div>
				<div>
					<p>Siga a Coocerqui:</p>
					<ul>
						<a href="#">
							<i className='fa fa-facebook-square' />
						</a>
						<a href="#">
							<i className='fa fa-instagram' />
						</a>
						<a href="#">
							<i className='fa fa-whatsapp' />
						</a>
					</ul>
				</div>
			</ul>
		</footer>
	)
}