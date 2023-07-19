import { Link } from 'react-router-dom';
import x from '../../assets/images/x.svg';

const ModalMenu = () => {
	return (
		<div className='fixed -top-0 m-[0] flex h-screen w-[375px] bg-negro bg-opacity-70 lg:hidden'>
			<nav className='p m-0 w-[250px] bg-blanco px-[28px] py-[24px] text-[1.1em] font-bold'>
				<img src={x} alt='x icon' className='cursor-pointer' />
				<ul className='mt-[50px] flex h-[200px] flex-col justify-between'>
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
	);
};

export default ModalMenu;
