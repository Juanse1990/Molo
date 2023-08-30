import MoloLogo from '../../assets/images/MoloLogo.png';

const AboutUs = () => {
	return (
		<section className='flex justify-center'>
			<div className='mt-[30px] flex w-[375px] flex-col items-center justify-center lg:w-[1024px] lg:flex-row lg:border-[3px] lg:border-amarillo'>
				<img
					src={MoloLogo}
					alt='MoloLogo'
					className='h-[325px] w-[325px] lg:h-[509px] lg:w-[509px]'
				/>
				<div className='flex h-[325px] w-[325px] items-center justify-center bg-error-image lg:h-[509px] lg:w-[509px]'>
					<div className='flex h-[325px] w-[325px] flex-col items-center justify-center bg-blanco bg-opacity-[80%] text-center lg:h-[509px] lg:w-[509px]'>
						<h2 className='text-bold mb-1 border-b-[3px] border-amarillo text-[35px] leading-none lg:text-[60px]'>
							MOLO
						</h2>
						<p className='w-[300px] text-[12px] font-bold lg:w-[498px] lg:text-[17px]'>
							¡Bienvenidos a la COMUNIDAD MOLO!
						</p>
						<p className='w-[300px] text-[12px] font-bold lg:w-[498px] lg:text-[17px]'>
							Somos dos amigos emprendedores comprometidos a inspirarte y
							motivarte a través de la venta de indumentaria deportiva de alta
							calidad y estilo.
						</p>
						<p className='w-[300px] text-[12px] font-bold lg:w-[498px] lg:text-[17px]'>
							Entendemos que el entrenamiento es la clave para una vida mejor y
							estamos aquí para apoyarte en tu camino hacia la superación
							personal.
						</p>
						<p className='w-[300px] text-[12px] font-bold lg:w-[498px] lg:text-[17px]'>
							Nuestra meta es proporcionarte la indumentaria perfecta para
							alcanzar tu máximo rendimiento y eliminar cualquier excusa para
							dar lo mejor de ti.
						</p>
						<p className='w-[300px] text-[12px] font-bold lg:w-[498px] lg:text-[17px]'>
							Veni a unirte a nuestra comunidad y saca tu mejor versión.
						</p>
						<p className='w-[300px] p-2 text-left text-[13px] font-bold lg:w-[498px] lg:p-5 lg:text-[25px]'>
							EQUIPO MOLO {`🚀🏋️⚡`}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
