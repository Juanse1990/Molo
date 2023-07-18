import { Link } from 'react-router-dom';
import x from '../../assets/images/x.svg';
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
			<div className='hidden'>
				<nav>
					<img src={x} alt='x icon' className='white' />
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
			</div>
			<div className='flex items-center justify-between w-[70px] lg:w-[125px]'>
				<div className='relative cursor-pointer'>
					<div className='w-[15px] h-[12px] bg-orange-400 rounded-[16px] absolute mt-[-2px] ml-[-3px] text-[0.6em] text-center text-blanco hidden'>
						3
					</div>
					<img src={cart} alt='carrito' className='lg:w-[48px]' />
				</div>
				<img
					src={avatar}
					alt='avatar'
					className='w-[30px] lg:w-[48px] hover:cursor-pointer hover:border-[2px] hover:border-azul hover:rounded-[50%]'
				/>
			</div>
		</>
	);
};

export default Menu;
