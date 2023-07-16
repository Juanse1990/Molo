import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<header>
				<nav>
					<Link to={'/'} className=''>
						MOLO
					</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default NavBar;
