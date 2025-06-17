import { useEffect } from "react"
import './faq.css'
export default function Faq() {

	const questions_answers = [
		{
			pergunta: "Como faço para comprar?",
			resposta: "Para comprar é fácil...."
		},
		{
			pergunta: "Como faço para comprar?",
			resposta: "Para comprar é fácil...."
		},
		{
			pergunta: "Como faço para comprar?",
			resposta: "Para comprar é fácil...."
		},
		{
			pergunta: "Como faço para comprar?",
			resposta: "Para comprar é fácil...."
		},
		{
			pergunta: "Como faço para comprar?",
			resposta: "Para comprar é fácil...."
		},
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