import { useEffect } from "react"
import './faq.css'
export default function Faq() {

	const questions_answers = [
		{
			pergunta: "Vocês oferecem serviço de delivery?",
			resposta: "Sim! A Coocerqui Drogaria oferece serviço de delivery em diversas cidades. Como a disponibilidade pode variar entre as unidades, recomendamos consultar a loja da sua cidade para mais informações."
		},
		{
			pergunta: "Como encontro a Coocerqui Drogaria mais próxima?",
			resposta: "Você pode localizar a unidade mais próxima acessando a aba 'Nossas Lojas' aqui no site. Lá, você encontra todas as opções disponíveis por cidade."
		},
		{
			pergunta: "É possível comprar online?",
			resposta: "Sim! Basta enviar uma mensagem para o WhatsApp do nosso delivery, escolher os produtos desejados, e um de nossos atendentes irá separar e enviar suas compras até a sua casa."
		},
		{
			pergunta: "Como faço para receber ofertas no meu celular?",
			resposta: "É simples! Envie um 'Oi' para o WhatsApp da Coocerqui Drogaria da sua cidade e comece a receber nossas ofertas diretamente no seu celular."
		}
	]

	useEffect(() => {
		const faqs = document.querySelectorAll('.faq-item');
		const openeds = document.querySelectorAll('.active');
		
		const handleClick = (item) => {
			const icon = item.querySelector('.fa')
			const response = item.querySelector('.response-faq');
			const isOpen = response.classList.contains('active');

			// Close All


			if (!isOpen) {
				response.style.display = 'block';
				response.classList.add('active')
				icon.classList.remove('deactived')
				icon.classList.add('active')
			} else {
				response.style.display = 'none';
				response.classList.remove('active')
				icon.classList.add('deactived')
				icon.classList.remove('active')
			}

		}
		
		faqs.forEach(faq => {
			faq.addEventListener('click', () => {
				handleClick(faq);
			})
		})

		return () => {
			faqs.forEach(faq => {
				faq.removeEventListener('click', handleClick)
			})
		}

	}, [])

	return (
		<div className="faq-sec">
			<h1>Ou veja se alguma de suas perguntas já foi respondida anteriormente:</h1>
			<ul className="faq" id="faq">
				{questions_answers.map(({pergunta, resposta}, index) => {
					return (
						<li key={index} className="faq-item">
							<div className="head-faq">
								<h3>{pergunta}</h3>
								<i className="fa fa-arrow-down"></i>
							</div>
							<div className="response-faq">
								<p>{resposta}</p>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}