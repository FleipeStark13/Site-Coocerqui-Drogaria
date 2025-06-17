import logo from '../../../imgs/header-logo.png';
import './footer.css'
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
					<ul className='links-footer'>
						<a href="#stores">Nossas Lojas</a>
						<a href="#sac">Fale Conosco</a>
						<a href="#tabloide-mensal">Tabloide Mensal</a>
					</ul>
				</div>
				<div>
					<p>Siga a Coocerqui:</p>
					<ul className='social-medias-footer'>
						<a href="https://www.facebook.com/coocerqui.oficial/">
							<i className='fa fa-facebook-square' />
						</a>
						<a href="https://www.instagram.com/coocerqui.oficial/">
							<i className='fa fa-instagram' />
						</a>
					</ul>
				</div>
			</ul>
		</footer>
	)
}