import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<nav className=' hidden w-[500px] lg:block'>
				<ul className='flex justify-between text-[1.2em] font-bold'>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-amarillo'>
						<Link>Hombre</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-amarillo'>
						<Link>Mujer</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-amarillo'>
						<Link>Unisex</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-amarillo'>
						<Link>Nosotros</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-amarillo'>
						<Link>Contacto</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Menu;
