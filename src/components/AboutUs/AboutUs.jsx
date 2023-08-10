import MoloLogo from '../../assets/images/MoloLogo.png';

const AboutUs = () => {
	return (
		<section className='flex justify-center'>
			<div className='mt-[30px] flex justify-center border-[3px] border-amarillo lg:w-[1024px]'>
				<img src={MoloLogo} alt='MoloLogo' className='h-[509px] w-[509px]' />
				<div className='flex h-[509px] w-[509px] items-center justify-center bg-error-image'>
					<div className='flex h-[509px] w-[509px] flex-col items-center justify-center bg-blanco bg-opacity-[80%] text-center'>
						<h2 className='text-bold mb-1 border-b-[3px] border-amarillo text-[45px] leading-none lg:text-[60px]'>
							MOLO
						</h2>
						<p className='w-[498px] font-bold lg:text-[17px]'>
							Somos dos amigos emprendedores que buscamos motivar a las personas
							en sus entrenamientos a partir de la venta de indumentaria
							deportiva con un estilo definido y una calidad que soporte el
							mayor rendimiento.
						</p>
						<p className='w-[498px] font-bold lg:text-[17px]'>
							Entendemos que para una mejor calidad de vida, el entrenamiento es
							de suma importancia y es por eso que queremos ser parte de ese
							proceso personal de superación, brindando indumentaria que te deje
							sin excusas para dar tu mayor esfuerzo.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
