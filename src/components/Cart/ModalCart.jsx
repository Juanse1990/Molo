import trash from '../../assets/images/delete.svg';
import image from '../../assets/images/1.jpg';
import { useSelector } from 'react-redux';

const ModalCart = () => {
	const size = useSelector((state) => state.size);
	const quantity = useSelector((state) => state.quantity);
	const price = useSelector((state) => state.price);

	return (
		<div className='absolute right-[6px] top-[75px] z-40 h-[260px] w-[360px] rounded-[8px] bg-blanco shadow-lg'>
			<p className='border-b-[1px]  border-azul p-[24px] font-bold'>Cart</p>
			{price ? (
				<div className='p-[24px]'>
					<div className='mb-[24px] flex items-center justify-between'>
						<img
							src={image}
							alt='image'
							className='h-[50px] w-[50px] rounded-[4px]'
						/>
						<div>
							<p>Molo ropa indumentaria</p>
							<p>Talle: {size}</p>
							<p>
								${price}.00 x {quantity}
								<span className='font-bold'>${price * quantity}.00</span>
							</p>
						</div>
						<img src={trash} alt='delete' className='cursor-pointer' />
					</div>
					<button className='text-bold flex h-[57px] w-full items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'>
						Pagar
					</button>
				</div>
			) : (
				<div className='mt-[40px] flex items-center justify-center p-[24px]'>
					<p className=''>No hay articulos aun</p>
				</div>
			)}
		</div>
	);
};

export default ModalCart;
