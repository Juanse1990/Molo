import { Marcas, Discount } from './index';
import moloLogo from '../../assets/images/MoloLogo.png';
import Portada1 from '../../assets/images/Portada1.png';
import Portada2 from '../../assets/images/Portada2.png';

const Home = () => {
	return (
		<>
			<section className='flex w-full items-center justify-center border-b-[1px] border-b-azul lg:w-[1115px]'>
				<div className='my-5 flex h-[327px]  w-[327px] justify-center lg:h-[430px] lg:w-[1068px]'>
					<img
						src={Portada1}
						alt='MOLO'
						className='hidden w-auto lg:block lg:h-full'
					/>
					<img
						src={moloLogo}
						alt='MOLO'
						className='h-[327px] w-auto lg:h-full'
					/>
					<img
						src={Portada2}
						alt='MOLO'
						className='hidden w-auto lg:block lg:h-full'
					/>
				</div>
			</section>
			<section className='flex w-full items-center justify-center border-b-[1px] border-b-azul'>
				<Marcas />
			</section>
			<section className='my-5 flex w-full items-center justify-center'>
				<Discount />
			</section>
		</>
	);
};

export default Home;
