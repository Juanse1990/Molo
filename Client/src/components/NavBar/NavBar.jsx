import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Menu, ModalMenu } from './index';
import ModalCart from '../Cart/ModalCart';
import ModalLogin from '../Login/ModalLogin';
import menu from '../../assets/images/menu.svg';
import avatar from '../../assets/images/avatar.png';
import error from '../../assets/images/Error.png';
import cart from '../../assets/images/cart.svg';

const NavBar = () => {
	const [modalMenu, setModalMenu] = useState(false);
	const [modalCart, setModalCart] = useState(false);
	const [modalLogin, setModalLogin] = useState(false);
	const quantity = useSelector((state) => state.quantity);
	const logged = useSelector((state) => state.logged);

	const modalMenuOC = () => {
		setModalMenu(!modalMenu);
	};
	const modalCartOC = () => {
		setModalCart(!modalCart);
	};
	const modalLoginOC = () => {
		setModalLogin(!modalLogin);
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
						{logged ? (
							<img
								src={error}
								alt='avatar'
								className='w-[30px] cursor-pointer rounded-[32px] lg:w-[48px]'
								onClick={modalLoginOC}
							/>
						) : (
							<img
								src={avatar}
								alt='avatar'
								className='w-[30px] cursor-pointer lg:w-[48px]'
								onClick={modalLoginOC}
							/>
						)}
					</div>
				</header>
				{modalMenu && <ModalMenu modalMenuOC={modalMenuOC} />}
				{modalCart && <ModalCart modalLoginOC={modalLoginOC} />}
				{modalLogin && <ModalLogin modalLoginOC={modalLoginOC} />}
				<Outlet />
			</div>
		</>
	);
};

export default NavBar;
