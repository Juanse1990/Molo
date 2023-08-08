import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sortGen } from '../../redux/index';
import WhatsAppLogo from '../../assets/images/WhatsAppLogo.svg';
import IgLogo from '../../assets/images/IgLogo.svg';
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
		<section className='m-auto mt-[15px] flex w-[375px] items-center justify-center bg-azul lg:mt-[25px] lg:w-full'>
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
					<h2 className='mx-[5px] my-[10px] font-bold'>CONTACTO</h2>
					<ul className='mx-[5px] my-[10px] flex w-[90px] items-center justify-around text-center lg:w-[350px]'>
						<li>
							<a
								href='https://www.instagram.com/moloindumentaria'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={IgLogo}
									alt='Instagram'
									className='h-[25px] w-[25px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://wa.me/543624723446?text=Hola%20quiero%20hacerte%20una%20consulta!'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={WhatsAppLogo}
									alt='WhatsApp'
									className='h-[25px] w-[25px] lg:h-[50px] lg:w-[50px]'
								/>
							</a>
						</li>
						<li>
							<a
								href='mailto:moloindumentaria@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={GmailLogo}
									alt='Correo'
									className='h-[25px] w-[25px] lg:h-[50px] lg:w-[50px]'
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
