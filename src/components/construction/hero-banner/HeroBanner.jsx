import banner_mobile from '../../../imgs/banner-drogaria-mobile.png';
import banner_pc from '../../../imgs/banner-drogaria-pc.png';
import './hero-banner.css'
export default function HeroBanner() {
	
	function redirectUser() {
		window.open('https://www.loja.coocerqui.com.br/', '_blank');
	}
	
	return (
		<div className="hero-banner">
			<figure onClick={redirectUser}>
				<picture>
					<source media="(max-width: 920px)" srcset={banner_mobile} />
					<img src={banner_pc} alt="" />
				</picture>
			</figure>
		</div>
	)
}