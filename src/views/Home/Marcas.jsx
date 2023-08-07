import FuarkLogo from '../../assets/images/FuarkLogo.png';
import BassetLogo from '../../assets/images/BassetLogo.png';
import AguaFitnessLogo from '../../assets/images/AguaFitnessLogo.png';

const Marcas = () => {
	return (
		<div className='my-5 flex flex-col items-center'>
			<h2 className='border-b-[2px] border-b-azul text-center text-[2em] font-bold'>
				Nuestras Marcas
			</h2>

			<ul className='mt-[10px] flex w-[375px] items-center justify-around text-[1.2em] font-bold lg:w-[1115px]'>
				<li className='m-[20px]'>
					<img
						src={FuarkLogo}
						alt='Fuark'
						className='h-auto w-[60px] lg:w-[100px]'
					/>
				</li>
				<li>
					<img
						src={BassetLogo}
						alt='Basset'
						className='h-auto w-[90px] lg:w-[150px]'
					/>
				</li>
				<li>
					<img
						src={AguaFitnessLogo}
						alt='Agua Fitness'
						className='h-auto w-[90px] lg:w-[150px]'
					/>
				</li>
			</ul>
		</div>
	);
};

export default Marcas;
