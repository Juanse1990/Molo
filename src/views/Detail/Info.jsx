import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { modalCartInfo } from '../../redux/actions';
import cart from '../../assets/images/cart-white.svg';
import card from '../../assets/images/card.svg';
import cash from '../../assets/images/cash.svg';

const Info = ({ cloth }) => {
	const dispatch = useDispatch();
	const [selectedSize, setSelectedSize] = useState('');
	const [quantity, setQuantity] = useState(1);

	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};
	const DQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};
	const IQuantity = () => {
		setQuantity(quantity + 1);
	};
	const handleInputChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleSubmit = () => {
		if (selectedSize !== '') {
			dispatch(
				modalCartInfo(cloth().nombre, selectedSize, quantity, priceDiscount),
			);
		}
	};
	const priceDiscount = cloth().descuento
		? (cloth().precio - cloth().precio / cloth().descuento).toFixed(2)
		: cloth().precio;

	return (
		<article className='px-[24px] lg:my-auto lg:w-[446px]'>
			<h2 className='mb-[12px] text-[0.8em] uppercase tracking-[1px] text-azul'>
				{cloth().marca}
			</h2>
			<h2 className='mb-[16px] text-[1.7em] font-bold lg:mb-[20px] lg:text-[2.7em]'>
				{cloth().nombre}
			</h2>
			<div className='flex flex-col'>
				<span className='mb-2'>
					<img src={card} alt='Tarjeta' className='float-left mr-2 w-[25px]' />
					<span className=''>
						<strong>3 cuotas sin interés</strong> de $
						{`${(cloth().precio / 3).toFixed(2)}`}
					</span>
				</span>
				<span className='col-12 mb-2'>
					<img src={cash} alt='Efectivo' className='float-left mr-2 w-[25px]' />
					<span>
						<strong>10% de descuento</strong> pagando con Transferencia/Depósito
					</span>
				</span>
			</div>
			<div className='mb-[24px] flex items-center justify-between'>
				<p className='flex items-center gap-[18px] text-[1.8em] font-bold'>
					${priceDiscount}
					{cloth().descuento ? (
						<span className='rounded-[8px] bg-red-500 bg-opacity-[0.1] p-[4px] text-[0.5em] text-red-500'>
							{cloth().descuento}%
						</span>
					) : null}
				</p>
				{cloth().descuento ? (
					<p className='text-bold text-azul line-through'>${cloth().precio}</p>
				) : null}
			</div>
			<div className='flex justify-center'>
				<ul className='mb-[24px] flex h-[40px] w-[250px] cursor-pointer items-center justify-between'>
					{cloth().talles.includes('xs') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul focus:bg-azul ${
								selectedSize === 'XS' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('XS')}
						>
							XS
						</li>
					) : null}
					{cloth().talles.includes('s') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul ${
								selectedSize === 'S' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('S')}
						>
							S
						</li>
					) : null}
					{cloth().talles.includes('m') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul ${
								selectedSize === 'M' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('M')}
						>
							M
						</li>
					) : null}
					{cloth().talles.includes('l') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul ${
								selectedSize === 'L' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('L')}
						>
							L
						</li>
					) : null}
					{cloth().talles.includes('xl') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul ${
								selectedSize === 'XL' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('XL')}
						>
							XL
						</li>
					) : null}
					{cloth().talles.includes('xxl') ? (
						<li
							className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-azul hover:bg-azul ${
								selectedSize === 'XXL' ? 'bg-azul' : 'hover:bg-azul'
							}`}
							onClick={() => handleSizeClick('XXL')}
						>
							XXL
						</li>
					) : null}
				</ul>
			</div>
			<div className='lg:flex lg:h-[47px] lg:items-center lg:gap-[32px]'>
				<div className='mb-[24px] flex h-[40px] items-center text-center lg:mb-[0]'>
					<p
						className=' h-full w-[25px] cursor-pointer text-[25px] font-bold text-azul hover:opacity-[0.5]'
						onClick={DQuantity}
					>
						-
					</p>
					<input
						type='text'
						value={quantity}
						onChange={handleInputChange}
						className='text-bold w-full border-none text-center text-[1.2em] outline-none'
					/>
					<p
						onClick={IQuantity}
						className='h-full w-[25px] cursor-pointer text-[25px] font-bold text-azul hover:opacity-[0.5]'
					>
						+
					</p>
				</div>
				<button
					onClick={handleSubmit}
					className='text-bold mb-[30px] flex h-[57px] w-full items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5] lg:mb-[0px]'
				>
					<img src={cart} alt='carrito' />
					Añadir al carrito
				</button>
			</div>
		</article>
	);
};

Info.propTypes = {
	cloth: PropTypes.func.isRequired,
};

export default Info;
