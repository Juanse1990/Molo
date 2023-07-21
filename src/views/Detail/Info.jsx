import cart from '../../assets/images/cart-white.svg';

const Info = () => {
	return (
		<article className='p-[24px]'>
			<h2 className='mb-[12px] text-[0.8em] uppercase tracking-[1px] text-azul'>
				Molo
			</h2>
			<h2 className='mb-[16px] text-[1.7em] font-bold'>
				Molo Information Gallery Clothes
			</h2>
			<p className='mb-[24px] text-[0.94em] leading-[24px]'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
				ab? Incidunt eius, tempore quidem iste saepe minus aspernatur ipsum
				ipsa! Eveniet suscipit accusantium deserunt dignissimos atque commodi
				harum reprehenderit! Earum?
			</p>
			<div className='mb-[24px] flex items-center justify-between'>
				<p className='flex items-center gap-[18px] text-[1.8em] font-bold'>
					$125.00{' '}
					<span className=' p-[4px] text-[0.5em] text-red-500'>50%</span>
				</p>
				<p className='text-bold text-azul line-through'>$250.00</p>
			</div>
			<div>
				<div className='mb-[24px] flex h-[40px] items-center'>
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
				<button className='text-bold flex h-[57px] w-full items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'>
					<img src={cart} alt='carrito' />
					Añadir al carrito
				</button>
			</div>
		</article>
	);
};

export default Info;
