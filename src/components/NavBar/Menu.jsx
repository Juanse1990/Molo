import { Link } from 'react-router-dom';
import { Search } from './index';

const Menu = () => {
	return (
		<>
			<nav className='hidden w-[800px] lg:block'>
				<ul className='flex justify-between text-[1.2em] font-bold lg:ml-[20px]'>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Hombre</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Mujer</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Unisex</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Nosotros</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Contacto</Link>
					</li>
					<Search />
				</ul>
			</nav>
		</>
	);
};

export default Menu;
