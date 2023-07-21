import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';
import menu from '../../assets/images/menu.svg';
import ModalMenu from './ModalMenu';
import cart from '../../assets/images/cart.svg';
import avatar from '../../assets/images/avatar.png';
import ModalCart from '../Cart/ModalCart';

const NavBar = () => {
	const [modalMenu, setModalMenu] = useState(false);
	const [modalCart, setModalCart] = useState(false);

	const modalMenuOC = () => {
		if (modalMenu) setModalMenu(false);
		else setModalMenu(true);
	};
	const modalCartOC = () => {
		if (modalCart) setModalCart(false);
		else setModalCart(true);
	};

	return (
		<>
			<div className='relative m-auto w-[375px] lg:w-[1115px]'>
				<header className='relative m-auto flex h-[68px] w-[375px] items-center justify-between px-[24px] lg:h-[112px] lg:w-[1115px] lg:border-b-[1px] lg:border-b-azul'>
					<div className='flex h-full w-[175px] items-center justify-between lg:w-[700px]'>
						<img
							src={menu}
							alt='menu icon'
							className='white cursor-pointer lg:hidden'
							onClick={modalMenuOC}
						/>
						<Link to={'/detail'} className='text-[45px] lg:text-[60px]'>
							MOLO
						</Link>
						<Menu />
					</div>
					<div className='flex w-[70px] items-center justify-between lg:w-[125px]'>
						<div className='relative cursor-pointer'>
							<div className='absolute ml-[-3px] mt-[-2px] hidden h-[12px] w-[15px] rounded-[16px] bg-orange-400 text-center text-[0.6em] text-blanco'>
								3
							</div>
							<img
								src={cart}
								alt='carrito'
								className='lg:w-[48px]'
								onClick={modalCartOC}
							/>
						</div>
						<img
							src={avatar}
							alt='avatar'
							className='w-[30px] hover:cursor-pointer hover:rounded-[50%] hover:border-[2px] hover:border-azul lg:w-[48px]'
						/>
					</div>
				</header>
				{modalMenu && <ModalMenu modalMenuOC={modalMenuOC} />}
				{modalCart && <ModalCart />}
				<Outlet />
			</div>
		</>
	);
};

export default NavBar;
