import { Marcas } from './index';

const Home = () => {
	return (
		<>
			<section className='flex w-full items-center justify-center border-b-[1px] border-b-azul lg:w-[1115px]'>
				<div className='my-5 h-[500px] w-[327px] bg-error-image lg:w-[1070px]'></div>
			</section>
			<section className='flex w-full items-center justify-center border-b-[1px] border-b-azul'>
				<Marcas />
			</section>
			<section className='my-5 flex w-full items-center justify-center'></section>
		</>
	);
};

export default Home;
