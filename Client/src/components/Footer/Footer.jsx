import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sortGen } from '../../redux/index';
import WhatsAppLogo from '../../assets/images/WhatsAppLogo.svg';
import IgLogo from '../../assets/images/IgLogo.svg';
import GoogleMapsLogo from '../../assets/images/GoogleMapsLogo.svg';
import GmailLogo from '../../assets/images/GmailLogo.svg';

const Footer = () => {
	const dispatch = useDispatch();

	const handleGender = (gender) => {
		dispatch(sortGen(gender));
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<section className='m-auto mt-[30px] flex w-[375px] items-center justify-center bg-azul lg:w-full'>
			<div className='flex h-[140px] w-[375px] justify-around lg:h-[147px] lg:w-[1115px]'>
				<ul className='flex w-[90px] flex-col text-center lg:w-[350px] '>
					<li className='mx-[5px] mt-[10px] lg:text-[20px]'>
						<a className='cursor-pointer font-bold' onClick={scrollToTop}>
							MOLO
						</a>
					</li>
					<li className='mx-[5px] mt-[10px]'>
						<Link
							to={'/products'}
							onClick={() => handleGender('male')}
							className='cursor-pointer'
						>
							Hombre
						</Link>
					</li>
					<li className='mx-[5px] mt-[10px]'>
						<Link
							to={'/products'}
							onClick={() => handleGender('female')}
							className='cursor-pointer'
						>
							Mujer
						</Link>
					</li>
					<li className='mx-[5px] mt-[10px]'>
						<Link
							to={'/products'}
							onClick={() => handleGender('unisex')}
							className='cursor-pointer'
						>
							Unisex
						</Link>
					</li>
				</ul>
				<div className='items-centers flex flex-col text-center lg:w-[350px] lg:text-[20px]'>
					<h2 className='mx-[5px] mt-[10px] font-bold lg:my-[10px]'>
						CONTACTO
					</h2>
					<ul className='mx-[5px] my-[10px] flex w-[90px] flex-wrap items-center justify-around text-center lg:w-[350px]'>
						<li className='mb-[5px] lg:mb-0'>
							<a
								href='https://www.instagram.com/moloindumentaria'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={IgLogo}
									alt='Instagram'
									className='h-[38px] w-[38px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
						<li className='mb-[5px] lg:mb-0'>
							<a
								href='https://wa.me/543624723446?text=Hola%20quiero%20hacerte%20una%20consulta!'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={WhatsAppLogo}
									alt='WhatsApp'
									className='h-[38px] w-[38px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
						<li className='mb-[5px] lg:mb-0'>
							<a
								href='https://www.google.com.ar/maps/place/Santiago+del+Estero+885,+H3500+Resistencia,+Chaco/@-27.4473352,-59.0004528,17z/data=!3m1!4b1!4m6!3m5!1s0x94450c6255ced9f9:0xb8337f75c6c79ecf!8m2!3d-27.44734!4d-58.9978779!16s%2Fg%2F11j8sg1pcy?entry=ttu'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={GoogleMapsLogo}
									alt='GoogleMaps'
									className='h-[38px] w-[38px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
						<li className='mb-[5px] lg:mb-0'>
							<a
								href='mailto:moloindumentaria@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={GmailLogo}
									alt='Correo'
									className='h-[38px] w-[38px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className='mx-[5px] my-[10px] w-[147px] text-center lg:w-[350px] lg:text-[20px]'>
					<h2 className='font-bold'>FORMAS DE PAGO</h2>
				</div>
			</div>
		</section>
	);
};

export default Footer;
