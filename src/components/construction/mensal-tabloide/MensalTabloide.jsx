import './mensalTabloide.css'
export default function MensalTabloide () {

	const texts = {
		title: "Para aquecer seu inverno!",
		subtitle: "Acompanhe nosso tabloide mensal:",
		description: "Julho chegou! Aqui na Coocerqui Drogaria a gente preparou as melhores ofertas de inverno pra você aproveitar, vem só conferir o nosso tabloide mensal, especial de inverno."
	}

	const tabloideImgLinks = {
		page_1: "https://mkt.coocerqui.com.br/public/drogaria/tabloide_mensal/imgs/1.jpg",
		page_2: "https://mkt.coocerqui.com.br/public/drogaria/tabloide_mensal/imgs/2.jpg",
		page_3: "https://mkt.coocerqui.com.br/public/drogaria/tabloide_mensal/imgs/3.jpg",
	}

	return (
		<div className="flex-tabloide">
			<div className="left-tabloide">
				<h1>{texts.title}</h1>
				<h2>{texts.subtitle}</h2>
				<p>{texts.description}</p>

				<button>
					<a target='_blank' href="https://mkt.coocerqui.com.br/drogaria/tabloide_mensal">QUERO VER AS OFERTAS</a>
					<i className="fa fa-search"></i>
				</button>

			</div>
			<div className="right-tabloide">
				<figure>
					<img src={tabloideImgLinks.page_1} alt="" />
				</figure>
				<figure>
					<img src={tabloideImgLinks.page_2} alt="" />
				</figure>
				<figure>
					<img src={tabloideImgLinks.page_3} alt="" />
				</figure>
			</div>
		</div>
	)
}