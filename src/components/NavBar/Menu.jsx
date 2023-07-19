import { Link } from 'react-router-dom';
import cart from '../../assets/images/cart.svg';
import avatar from '../../assets/images/avatar.png';

const Menu = () => {
	return (
		<>
			<nav className='hidden'>
				<ul>
					<li>
						<Link>Hombre</Link>
					</li>
					<li>
						<Link>Mujer</Link>
					</li>
					<li>
						<Link>Nosotros</Link>
					</li>
					<li>
						<Link>Contacto</Link>
					</li>
				</ul>
			</nav>
			<div className='flex w-[70px] items-center justify-between lg:w-[125px]'>
				<div className='relative cursor-pointer'>
					<div className='absolute ml-[-3px] mt-[-2px] hidden h-[12px] w-[15px] rounded-[16px] bg-orange-400 text-center text-[0.6em] text-blanco'>
						3
					</div>
					<img src={cart} alt='carrito' className='lg:w-[48px]' />
				</div>
				<img
					src={avatar}
					alt='avatar'
					className='w-[30px] hover:cursor-pointer hover:rounded-[50%] hover:border-[2px] hover:border-azul lg:w-[48px]'
				/>
			</div>
		</>
	);
};

export default Menu;
