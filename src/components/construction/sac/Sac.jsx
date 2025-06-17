import './sac.css'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
export default function Sac({sac_mail, sac_phone}) {
	return (
	<div className="sac">
		<h2>Precisa falar conosco?</h2>
		<p>Entre em contato pelo nosso SAC:</p>

		<ul>
			<li>
				<FaMailBulk id='sac-icon' size={30} />
				<div className="sac-contact">
					<h3>Email</h3>
					<p>{sac_mail}</p>
				</div>
			</li>
			<li>
				<FaPhone id='sac-icon' size={30} />
				<div className="sac-contact">
					<h3>Telefone</h3>
					<p>{sac_phone}</p>
				</div>
			</li>
		</ul>

	</div>
	)
}