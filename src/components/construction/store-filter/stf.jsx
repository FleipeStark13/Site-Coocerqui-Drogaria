export default function StoreFilter () {

	const stores = [
		{
			image_address: "https://www.coocerqui.com.br/upload/lojas/cache/620825752-loja-02-boituva-300x200-6f474b1b.png",
			name: "Coocerqui Drogaria Brasil",
			delivery: false,
			intern: false,
			address: "Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085",
			contact_label: "(15) 99813-9992",
			button_whatsapp: "https://wa.me/5515998139992?text=Olá",
			button_tellphone: "+551599813992"
		},
		{
			image_address: "https://www.coocerqui.com.br/upload/lojas/cache/620825752-loja-02-boituva-300x200-6f474b1b.png",
			name: "Coocerqui Drogaria Brasil",
			delivery: true,
			intern: false,
			address: "Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085",
			contact_label: "(15) 99813-9992",
			button_whatsapp: "https://wa.me/5515998139992?text=Olá",
			button_tellphone: "+551599813992"
		},
		{
			image_address: "https://www.coocerqui.com.br/upload/lojas/cache/620825752-loja-02-boituva-300x200-6f474b1b.png",
			name: "Coocerqui Drogaria Brasil",
			delivery: false,
			intern: true,
			address: "Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085",
			contact_label: "(15) 99813-9992",
			button_whatsapp: "https://wa.me/5515998139992?text=Olá",
			button_tellphone: "+551599813992"
		},
		{
			image_address: "https://www.coocerqui.com.br/upload/lojas/cache/620825752-loja-02-boituva-300x200-6f474b1b.png",
			name: "Coocerqui Drogaria Brasil",
			delivery: true,
			intern: true,
			address: "Av. Brasil, 469 - Centro - Cerquilho - SP.18520-085",
			contact_label: "(15) 99813-9992",
			button_whatsapp: "https://wa.me/5515998139992?text=Olá",
			button_tellphone: "+551599813992"
		},

	]

	return (
		<div className="store-filter">
			<h1>Encontre a Coocerqui Drogaria mais próxia de você!</h1>
			<p>Procure a drogaria mais próxima a você para que possa vir aproveitar os melhores descontos nos produtos e oportunidades!</p>

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
										{ store.delivery ? <li id="delivery">Delivery</li> : <li>Sem Delivery</li> }
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
								<a href={store.button_whatsapp}>
									<button>
										WhatsApp
									</button>
								</a>
								<a href={`tel:${store.button_tellphone}`} >
									<button>
										Telefone
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