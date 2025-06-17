export default function Banner({pc_src, mobile_src}) {
	return (
		<div className="banner">
			<picture>
				<source
					media={'max-width: 1020px'} 
				 	srcSet={mobile_src}
				/>

				<img src={pc_src} />
			</picture>
		</div>
	)
}