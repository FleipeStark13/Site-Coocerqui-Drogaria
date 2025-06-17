import { useEffect } from "react";
import './store-filter.css';
export default function StoreFilter() {
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
	return (
		<div className="store-filter">
			<h1>Encontre a Coocerqui Drogaria mais próxima de você!</h1>
			<p>
				Procure a drogaria mais próxima a você para que possa vir aproveitar os melhores
				descontos nos produtos e oportunidades!
			</p>

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
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/620825752-loja-02-boituva-300x200-6f474b1b.png" alt=""/>
                        </figure>
                    </div>
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Brasil</h2>
                        <p>Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085</p>
                        <p><strong>Contato:</strong> (15) 99813-9992</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515998139992?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+551599813992" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/1358130971-loja-04-cerquilho-nova-cerquilho-300x200-c2d1c24c.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Pereira Ignácio</h2>
                        <p>Av. Pereira Ignacio, 250 - Residencial Primo - Boituva - SP.18550-069</p>
                        <p><strong>Contato: </strong>(15) 99835-4443</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515998354443?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515998354443" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/1282094291-drogaria-boituva-300x200-03d35409.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria San Juan</h2>
                        <p>Av. Dr. Alberto San Juan, 400 - Jardim Baccili - Tietê - SP.18530-000</p>
                        <p><strong>Contato:</strong> (15) 99181-5544</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515991815544?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515991815544" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/589320388-tiete-coocerqui-drogaria-assis-madeira-300x200-dec2ef59.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="externa">Externa</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Assis Madeira</h2>
                        <p>Rua Prof. Francisco de Assis Madeira, 560 - Tietê - SP.18530-000</p>
                        <p><strong>Contato:</strong> (15) 99753-5897</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515997535897?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515997535897" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/324795641-drogaria-coocerqui-joao-pilon-300x200-f6ace807.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria João Pilon</h2>
                        <p>Av. João Pilon, 1333 (Sala 1) - Nosso Teto - Cerquilho - SP.18527-000</p>
                        <p><strong>Contato: </strong>(15) 99738-4006</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515997384006?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515997384006" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/235326641-drogaria-coocerqui-armando-salles-300x200-b7d64ee9.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Armando Salles</h2>
                        <p>Av. Armando Salles de Oliveira, 791- Jardim Santa Eliza, Porto Feliz - SP.18542-260</p>
                        <p><strong>Contato: </strong>(15) 99762-8210</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515997628210?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515997628210" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/1620707293-cerquilho-coocerqui-drogaria-costa-magueta-300x200-3db33b43.png" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="externa">Externa</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Costa Magueta</h2>
                        <p>Rua Antônio Costa Magueta, 21- Cerquilho -SP - CEP 18520-015</p>
                        <p><strong>Contato: </strong>(15) 99750-0012</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/5515997500012?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+5515997500012" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
                <li className="store-card">
                    <div className="store-head">
                        <figure id="store-img">
                            <img src="https://www.coocerqui.com.br/upload/lojas/cache/1155037678-drogaria-coocerqui-joaquim-trujillo-300x200-2dfb7e74.jpg" alt=""/>
                        </figure>
                    </div>
                    
                    <div className="store-content">
                        <div className="store-property">
                            <ul>
                                <li id="delivery">Delivery</li>
                                <li id="interna">Interna</li>
                            </ul>
                        </div>
                        <h2>Coocerqui Drogaria Joaquim Trujillo</h2>
                        <p>Av. Joaquim Trujillo, 262 - Sala 01- Jardim Flamboyant, Boituva - SP.18550-770</p>
                        <p><strong>Contato: </strong>(15) 3263-8225</p>
                    </div>
                    <div className="buttons">
                        <a href="https://wa.me/551532638225?text=Olá">
                            <button>
                                WhatsApp
                            </button>
                        </a>
                        <a href="tel:+551532638225" >
                            <button>
                                Ligar
                            </button>
                        </a>
                    </div>
                </li>
            </ul>

		</div>
	)
}