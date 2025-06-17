import depoimento_1 from '../../../imgs/depoimentos/Screenshot_1.png';
import depoimento_2 from '../../../imgs/depoimentos/Screenshot_2.png';
import depoimento_3 from '../../../imgs/depoimentos/Screenshot_3.png';
import depoimento_4 from '../../../imgs/depoimentos/Screenshot_4.png';
import depoimento_5 from '../../../imgs/depoimentos/Screenshot_5.png';

import './avaliacao.css'

export default function Avaliacao() {
	return (
		<div className="avaliacao">
			<h1>Você vai ficar de fora?</h1>
			<p>Veja o que os Cooperados estão falando sore a Coocerqui Drogaria!</p>

			<ul>
				<figure>
					<img src={depoimento_1} alt="" />
				</figure>
				<figure>
					<img src={depoimento_2} alt="" />
				</figure>
				<figure>
					<img src={depoimento_3} alt="" />
				</figure>
				<figure>
					<img src={depoimento_4} alt="" />
				</figure>
				<figure>
					<img src={depoimento_5} alt="" />
				</figure>
			</ul>
		</div>
	)
}