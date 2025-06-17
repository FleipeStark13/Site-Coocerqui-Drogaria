import logo from '../../../imgs/header-logo.png';
import './header.css'
export default function Header() {
	return (
		<header className='header'>
			<nav>
				<figure>
					<img  src={logo}></img>
				</figure>
				<ul>
					<li>
						<a href="#">Nossas Lojas</a>
					</li>
					<li>
						<a href="#">Entre em contato</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}