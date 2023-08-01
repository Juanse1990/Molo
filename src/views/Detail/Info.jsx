import { useState } from 'react';
import cart from '../../assets/images/cart-white.svg';

const Info = () => {
	const [selectedSize, setSelectedSize] = useState(null);

	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};

	return (
		<article className='px-[24px] lg:w-[446px]'>
			<h2 className='mb-[12px] text-[0.8em] uppercase tracking-[1px] text-azul'>
				Molo
			</h2>
			<h2 className='mb-[16px] text-[1.7em] font-bold lg:mb-[20px] lg:text-[2.7em]'>
				Molo Information Gallery Clothes
			</h2>
			<p className='mb-[24px] text-[0.94em] leading-[24px] lg:mb-[37px] lg:text-[0.90em]'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
				ab? Incidunt eius, tempore quidem iste saepe minus aspernatur ipsum
				ipsa! Eveniet suscipit accusantium deserunt dignissimos atque commodi
				harum reprehenderit! Earum?
			</p>
			<div className='mb-[24px] flex items-center justify-between lg:flex-col lg:items-start'>
				<p className='flex items-center gap-[18px] text-[1.8em] font-bold'>
					$125.00{' '}
					<span className='rounded-[8px] bg-red-500 bg-opacity-[0.1] p-[4px] text-[0.5em] text-red-500'>
						50%
					</span>
				</p>
				<p className='text-bold text-azul line-through'>$250.00</p>
			</div>
			<div>
				<ul className='mb-[24px] flex h-[40px] cursor-pointer items-center justify-between'>
					<li
						className={`h-[25px] w-[22px] rounded-[8px] px-[1px] hover:bg-azul focus:bg-azul ${
							selectedSize === 'XS' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('XS')}
					>
						XS
					</li>
					<li
						className={`h-[25px] w-[15px] rounded-[8px] px-[2px] hover:bg-azul ${
							selectedSize === 'S' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('S')}
					>
						S
					</li>
					<li
						className={`h-[25px] w-[15px] rounded-[8px] hover:bg-azul ${
							selectedSize === 'M' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('M')}
					>
						M
					</li>
					<li
						className={`h-[25px] w-[15px] rounded-[8px] px-[3px] hover:bg-azul ${
							selectedSize === 'L' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('L')}
					>
						L
					</li>
					<li
						className={`h-[25px] w-[22px] rounded-[8px] px-[1px] hover:bg-azul ${
							selectedSize === 'XL' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('XL')}
					>
						XL
					</li>
					<li
						className={`h-[25px] w-[30px] rounded-[8px] hover:bg-azul ${
							selectedSize === 'XXL' ? 'bg-azul' : 'hover:bg-azul'
						}`}
						onClick={() => handleSizeClick('XXL')}
					>
						XXL
					</li>
				</ul>
			</div>
			<div className='lg:flex lg:h-[47px] lg:items-center lg:gap-[32px]'>
				<div className='mb-[24px] flex h-[40px] items-center text-center lg:mb-[0]'>
					<p className=' h-full w-[25px] cursor-pointer text-[25px] font-bold text-azul hover:opacity-[0.5]'>
						-
					</p>
					<input
						type='text'
						value='0'
						className='text-bold w-full border-none text-center text-[1.2em] outline-none'
					/>
					<p className='h-full w-[25px] cursor-pointer text-[25px] font-bold text-azul hover:opacity-[0.5]'>
						+
					</p>
				</div>
				<button className='text-bold mb-[30px] flex h-[57px] w-full items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5] lg:mb-[0px]'>
					<img src={cart} alt='carrito' />
					Añadir al carrito
				</button>
			</div>
		</article>
	);
};

export default Info;
