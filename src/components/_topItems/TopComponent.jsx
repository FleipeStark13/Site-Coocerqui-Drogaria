import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import './topComp.css'
export default function TopComponent() {
	const components = [
		{
			title: 'WhatsApp',
			description: 'Entre em contato agora mesmo!',
			link: '#stores',
			icon: <FaWhatsapp></FaWhatsapp>
		},
		{
			title: 'backToTheTop',
			description: 'Voltar para o início da página',
			link: '#',
			icon: <FaArrowUp></FaArrowUp>

		},
	]

	return(
		<div className="topComponents">
			<ul>
				{
					components.map((component, index) => {
						return (
							<a href={component.link} title={component.description} className="topComponent">
								{component.icon}
							</a>
						)
					})}
			</ul>
		</div>
	)
}