import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import menu from '../../assets/images/menu.svg';
import { Menu, ModalMenu } from './index';
import cart from '../../assets/images/cart.svg';
import avatar from '../../assets/images/avatar.png';
import ModalCart from '../Cart/ModalCart';
import { useSelector } from 'react-redux';

const NavBar = () => {
	const [modalMenu, setModalMenu] = useState(false);
	const [modalCart, setModalCart] = useState(false);
	const quantity = useSelector((state) => state.quantity);

	const modalMenuOC = () => {
		setModalMenu(!modalMenu);
	};
	const modalCartOC = () => {
		setModalCart(!modalCart);
	};
	useEffect(() => {
		if (quantity) {
			setModalCart(true);
		} else {
			setModalCart(false);
		}
	}, [quantity]);

	return (
		<>
			<div className='relative m-auto w-[375px] lg:w-[1115px]'>
				<header className='relative m-auto flex h-[68px] w-[375px] items-center justify-between border-b-[1px] border-b-azul px-[24px] lg:h-[112px] lg:w-[1115px]'>
					<div className='flex h-full w-[175px] items-center justify-between lg:w-[850px]'>
						<img
							src={menu}
							alt='menu icon'
							className='white cursor-pointer lg:hidden'
							onClick={modalMenuOC}
						/>
						<Link to={'/'} className='text-[45px] lg:text-[60px]'>
							MOLO
						</Link>
						<Menu modalMenuOC={modalMenuOC} />
					</div>
					<div className='flex w-[70px] items-center justify-between lg:w-[125px]'>
						<div className='relative cursor-pointer'>
							<div className='absolute ml-[-3px] mt-[-2px] h-[12px] w-[15px] rounded-[16px] bg-azul text-center text-[0.6em] text-blanco lg:ml-[-5px] lg:mt-[3px]'>
								{quantity}
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
							className='w-[30px] cursor-pointer lg:w-[48px]'
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
