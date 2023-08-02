import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import x from '../../assets/images/x.svg';
import search from '../../assets/images/search.svg';

const ModalMenu = ({ modalMenuOC }) => {
	return (
		<div className='fixed -top-0 z-50 m-[0] flex h-screen w-[375px] bg-negro bg-opacity-70 lg:hidden'>
			<nav className='p m-0 w-[250px] bg-blanco px-[28px] py-[24px] text-[1.1em] font-bold'>
				<img
					src={x}
					alt='x icon'
					className='cursor-pointer'
					onClick={modalMenuOC}
				/>
				<ul className='mt-[50px] flex h-[250px] flex-col justify-between'>
					<li className='ml-[-8px] w-[150px]'>
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
					<li>
						<Link>Hombre</Link>
					</li>
					<li>
						<Link>Mujer</Link>
					</li>
					<li>
						<Link>Unisex</Link>
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
	);
};

ModalMenu.propTypes = {
	modalMenuOC: PropTypes.func.isRequired,
};

export default ModalMenu;
