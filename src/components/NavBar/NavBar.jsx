import { Link, Outlet } from 'react-router-dom';
import Menu from './Menu';
import menu from '../../assets/images/menu.svg';
import ModalMenu from './ModalMenu';

const NavBar = () => {
	return (
		<>
			<div className=' m-auto w-[375px] lg:w-[1115px]'>
				<header className='relative m-auto flex h-[68px] w-[375px] items-center justify-between px-[24px] lg:h-[112px] lg:w-[1115px] lg:border-b-[1px] lg:border-b-azul'>
					<div className='flex h-full w-[175px] items-center justify-between lg:w-[590px]'>
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
				<ModalMenu />
				<Outlet />
			</div>
		</>
	);
};

export default NavBar;
