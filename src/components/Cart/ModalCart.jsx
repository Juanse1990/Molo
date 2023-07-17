import image from '../../assets/images/image1.jpg';
import trash from '../../assets/images/delete.svg';

const ModalCart = () => {
	return (
		<div>
			<p>Cart</p>
			<div>
				<div>
					<img src={image} alt='image' />
					<div>
						<p>Molo ropa indumentaria</p>
						<p>
							$125.00 x 3 <span>$375.00</span>
						</p>
					</div>
					<img src={trash} alt='delete' />
				</div>
				<button>Pagar</button>
			</div>
		</div>
	);
};

export default ModalCart;
