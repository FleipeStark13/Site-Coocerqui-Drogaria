import './store-filter.css';

import img_brasil from './store-imgs/brasil.png';
import img_sanJuan from './store-imgs/san-juan.png';
import img_assisMadeira from './store-imgs/assis-madeira.png';
import img_armandoSalles from './store-imgs/armando-salles.png';
import img_costaMagueta from './store-imgs/costa-magueta.png';
import img_joaoPilon from './store-imgs/joao-pilon.png';
import img_joaquimTrujillo from './store-imgs/joaquim-trujillo.jpg';
import img_pereiraIgnacio from './store-imgs/pereira-ignacio.png';

import { useEffect } from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


export default function StoreFilter () {
	useEffect(() => {
		const searchInput = document.querySelector("#searchInput")
		const cityFilter = document.querySelector("#cityFilter")
		const typeFilter = document.querySelector("#typeFilter")
		const storeCards = document.querySelectorAll(".store-card")

		function filterStores() {
		const searchValue = searchInput.value.toLowerCase()
		const selectedCity = cityFilter.value.toLowerCase()
		const selectedType = typeFilter.value.toLowerCase()

		storeCards.forEach((card) => {
			const title = card.querySelector("h2").textContent.toLowerCase()
			const address = card.querySelector("p").textContent.toLowerCase()
			const fullText = title + " " + address

			const cityMatch = selectedCity === "" || address.includes(selectedCity)
			const typeMatch =
			selectedType === "" ||
			Array.from(card.querySelectorAll(".store-property li")).some(
				(li) => li.id === selectedType
			)

			const textMatch = fullText.includes(searchValue)

			card.style.display = cityMatch && typeMatch && textMatch ? "block" : "none"
		})
		}

		searchInput.addEventListener("input", filterStores)
		cityFilter.addEventListener("change", filterStores)
		typeFilter.addEventListener("change", filterStores)

		return () => {
		searchInput.removeEventListener("input", filterStores)
		cityFilter.removeEventListener("change", filterStores)
		typeFilter.removeEventListener("change", filterStores)
		}
	}, [])


	const stores = [
		{
			image_address: img_brasil,
			name: "Coocerqui Drogaria Brasil",
			delivery: false,
			intern: true,
			address: "Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085",
			contact_label: "(15) 99813-9992",
			button_whatsapp: "https://wa.me/5515998139992?text=Olá",
			button_tellphone: "+551599813992"
		},
		{
			image_address: img_sanJuan,
			name: "Coocerqui Drogaria San Juan",
			delivery: false,
			intern: true,
			address: "Av. Dr. Alberto San Juan, 400 - Jardim Baccili - Tietê - SP.18530-000",
			contact_label: "(15) 99181-5544",
			button_whatsapp: "https://wa.me/5515991815544?text=Ol%C3%A1",
			button_tellphone: "+5515991815544"
		},
		{
			image_address: img_assisMadeira,
			name: "Coocerqui Drogaria Assis Madeira",
			delivery: true,
			intern: false,
			address: "Rua Prof. Francisco de Assis Madeira, 560 - Tietê - SP.18530-000",
			contact_label: "(15) 99753-5897",
			button_whatsapp: "https://wa.me/5515997535897?text=Ol%C3%A1",
			button_tellphone: "+5515997535897"
		},
		{
			image_address: img_armandoSalles,
			name: "Coocerqui Drogaria Armando Salles",
			delivery: true,
			intern: false,
			address: "Av. Armando Salles de Oliveira, 791- Jardim Santa Eliza, Porto Feliz - SP.18542-260",
			contact_label: "(15) 99762-8210",
			button_whatsapp: "https://wa.me/5515997628210?text=Ol%C3%A1",
			button_tellphone: "+5515997628210"
		},
		{
			image_address: img_costaMagueta,
			name: "Coocerqui Drogaria Costa Magueta",
			delivery: true,
			intern: false,
			address: "Rua Antônio Costa Magueta, 21- Cerquilho -SP - CEP 18520-015",
			contact_label: "(15) 99750-0012",
			button_whatsapp: "https://wa.me/5515997500012?text=Ol%C3%A1",
			button_tellphone: "+5515997500012"
		},
		{
			image_address: img_joaoPilon,
			name: "Coocerqui Drogaria João Pilon",
			delivery: false,
			intern: true,
			address: "Av. João Pilon, 1333 (Sala 1) - Nosso Teto - Cerquilho - SP.18527-000",
			contact_label: "(15) 99738-4006",
			button_whatsapp: "https://wa.me/5515997384006?text=Ol%C3%A1",
			button_tellphone: "+5515997384006"
		},
		{
			image_address: img_joaquimTrujillo,
			name: "Coocerqui Drogaria Joaquim Trujillo",
			delivery: true,
			intern: true,
			address: "Av. Joaquim Trujillo, 262 - Sala 01- Jardim Flamboyant, Boituva - SP.18550-770",
			contact_label: "(15) 3263-8225",
			button_whatsapp: "https://wa.me/551532638225?text=Ol%C3%A1",
			button_tellphone: "+551532638225"
		},
		{
			image_address: img_pereiraIgnacio,
			name: "Coocerqui Drogaria Pereira Ignácio",
			delivery: false,
			intern: true,
			address: "Av. Pereira Ignacio, 250 - Residencial Primo - Boituva - SP.18550-069",
			contact_label: "(15) 99835-4443",
			button_whatsapp: "https://wa.me/5515998354443?text=Ol%C3%A1",
			button_tellphone: "+5515998354443"
		},
	]

	return (
		<div className="store-filter">

			<div className="store-filter-text-content">
				<h1>Encontre a Coocerqui Drogaria mais próxima de você!</h1>
				<p>Aproveite os melhores descontos e oportunidades em medicamentos e produtos de saúde e bem-estar. Use nossa ferramenta de busca para encontrar a unidade ideal e cuide da sua saúde com economia e qualidade. Estamos te esperando!</p>
			</div>

			<div className="filter">
				<div className="input-icon">
				<i className="fa fa-search" aria-hidden="true"></i>
				<input
					type="text"
					id="searchInput"
					placeholder="Buscar por nome ou endereço"
					aria-label="Buscar loja"
				/>
				</div>

				<div className="filter-icons">
				<div className="input-icon">
					<i className="fa fa-map-marker" aria-hidden="true"></i>
					<select id="cityFilter" aria-label="Filtrar por cidade">
					<option value="">Todas as cidades</option>
					<option value="cerquilho">Cerquilho</option>
					<option value="boituva">Boituva</option>
					<option value="tietê">Tietê</option>
					<option value="porto feliz">Porto Feliz</option>
					</select>
				</div>

				<div className="input-icon">
					<i className="fa fa-exchange" aria-hidden="true"></i>
					<select id="typeFilter" aria-label="Filtrar por tipo de atendimento">
					<option value="">Todos os tipos</option>
					<option value="interna">Interna</option>
					<option value="externa">Externa</option>
					</select>
				</div>
				</div>
			</div>


			<ul className="store-list">
				{stores.map(store => {
					return (
						<li className="store-card">
							<div className="store-head">
								<figure id="store-img">
									<img src={store.image_address} alt="Imagem Drogaria" />
								</figure>
							</div>
							<div className="store-content">
								<div className="store-property">
									<ul>
										{ store.delivery ? <li id="delivery">Delivery</li> : <li id='no-delivery'>Sem Delivery</li> }
										{ store.intern ? <li id="interna">Interna</li> : <li id="externa">Externa</li> }
									</ul>
								</div>
								<h2>{store.name}</h2>
								<p>{store.address}</p>
								<p>
									<strong>Contato:</strong>
									{store.contact_label}
								</p>
							</div>
							<div className="buttons">
								<a target='_blank' href={store.button_whatsapp}>
									<button>
										<FaWhatsapp />
										<p>WhatsApp</p>
									</button>
								</a>
								<a target='_blank' href={`tel:${store.button_tellphone}`} >
									<button>
										<FaPhone />
										<p>Telefone</p>
									</button>
								</a>
							</div>
						</li>
					)
				})}
			</ul>

		</div>


	)
}