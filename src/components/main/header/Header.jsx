import logo from '../../../imgs/header-logo.png';
import './header.css'

import { Outlet, Link } from "react-router-dom";


export default function Header() {
	return (
		<header className='header'>
			<nav>
				<figure>
					<img  src={logo}></img>
				</figure>
				<ul>
					<li>
						<a href="#stores">Nossas Lojas</a>
					</li>
					<li>
						<a href="#sac">Entre em contato</a>
					</li>
				</ul>
			</nav>

			<Outlet />
			
		</header>
	)
}