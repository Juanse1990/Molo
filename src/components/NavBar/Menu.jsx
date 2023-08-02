import { Link } from 'react-router-dom';
import search from '../../assets/images/search.svg';

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
					<li className='h-[112px] w-[150px] pt-[37px] hover:border-b-4 hover:border-azul'>
						<div className='relative flex w-[150px]'>
							<input
								type='text'
								placeholder='Buscar'
								className='w-full rounded-[8px] bg-azul bg-opacity-[0.25] p-[5px] text-negro outline-none placeholder:text-negro hover:bg-opacity-[0.5]'
							/>
							<img
								src={search}
								alt='Search'
								className='absolute right-[0px] mr-[3px] mt-[5px] h-[26px] cursor-pointer'
							/>
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Menu;
