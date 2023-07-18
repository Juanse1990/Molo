import { Link, Outlet } from 'react-router-dom';
import Menu from './Menu';
import menu from '../../assets/images/menu.svg';

const NavBar = () => {
	return (
		<>
			<header className='w-[375px] h-[68px] px-[24px] flex items-center justify-between lg:border-b-[1px] lg:border-b-azul m-auto lg:w-[1115px] lg:h-[112px]'>
				<div className='flex w-[175px] h-full items-center justify-between lg:w-[590px]'>
					<img
						src={menu}
						alt='menu icon'
						className='white cursor-pointer lg:hidden'
					/>
					<Link to={'/'} className='text-[45px] lg:text-[60px]'>
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
