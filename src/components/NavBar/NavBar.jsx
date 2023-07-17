import { Link, Outlet } from 'react-router-dom';
import Menu from './Menu';
import menu from '../../assets/images/menu.svg';

const NavBar = () => {
	return (
		<>
			<header className='bg-negro h-auto p-4'>
				<div className='flex'>
					<img src={menu} alt='menu icon' className='white' />
					<Link to={'/'} className='text-blanco text-5xl p-3'>
						MOLO
					</Link>
				</div>
				<Menu />
			</header>
			<Outlet />
		</>
	);
};

export default NavBar;
