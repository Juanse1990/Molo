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
		<section className='m-auto mt-[15px] w-[375px] bg-azul lg:w-full'>
			<div className='flex h-[145px] w-[375px] justify-around lg:w-[1115px]'>
				<ul className='flex w-[90px] flex-col text-center'>
					<li className='mx-[5px] mt-[10px]'>
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
				<div>
					<h2 className='mx-[5px] my-[10px] font-bold'>CONTACTO</h2>
					<ul className='mx-[5px] my-[10px] flex w-[90px] justify-between text-center'>
						<li>
							<a
								href='https://www.instagram.com/moloindumentaria'
								target='_blank'
								rel='noreferrer'
							>
								<img
									src={IgLogo}
									alt='Instagram'
									className='h-[25px] w-[25px]'
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
									className='h-[25px] w-[25px]'
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
									className='h-[25px] w-[25px]'
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className='mx-[5px] my-[10px] w-[147px] text-center'>
					<h2 className='font-bold'>FORMAS DE PAGO</h2>
				</div>
			</div>
		</section>
	);
};

export default Footer;
