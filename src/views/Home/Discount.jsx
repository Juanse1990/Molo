import MoloLogo from '../../assets/images/MoloLogo.png';

const Discount = () => {
	return (
		<div className='flex w-[375px] flex-col items-center justify-center lg:w-[1024px] lg:flex-row'>
			<img
				src={MoloLogo}
				alt='MoloLogo'
				className='h-[325px] w-[325px] lg:h-[255px] lg:w-[255px]'
			/>
			<div className='flex h-[325px] w-[325px] items-center justify-center bg-error-image lg:h-[255px] lg:w-[769px]'>
				<div className='flex h-[325px] w-[325px] flex-col items-center justify-center bg-blanco bg-opacity-[80%] text-center lg:h-[255px] lg:w-[769px]'>
					<h2 className='text-bold text-[45px] lg:border-b-[3px] lg:border-amarillo lg:text-[45px] lg:leading-none'>
						10% OFF en Efectivo o Transferencia
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Discount;
