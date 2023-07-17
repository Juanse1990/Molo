import cart from '../../assets/images/cart.svg';

const Info = () => {
	return (
		<article>
			<h2>Molo</h2>
			<h2>Molo Information Gallery Clothes</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
				ab? Incidunt eius, tempore quidem iste saepe minus aspernatur ipsum
				ipsa! Eveniet suscipit accusantium deserunt dignissimos atque commodi
				harum reprehenderit! Earum?
			</p>
			<div>
				<p>
					$125.00 <span>50%</span>
				</p>
				<p>$250.00</p>
			</div>
			<div>
				<div>
					<p>-</p>
					<input type='number' value='0' />
					<p>+</p>
				</div>
				<button>
					<img src={cart} alt='carrito' />
					Añadir al carrito
				</button>
			</div>
		</article>
	);
};

export default Info;
