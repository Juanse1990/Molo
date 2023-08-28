import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import x from '../../assets/images/x.svg';
import { Search } from './index';
import { useDispatch } from 'react-redux';
import { sortGen } from '../../redux/actions';

const ModalMenu = ({ modalMenuOC }) => {
	const dispatch = useDispatch();

	const handleGender = (gender) => {
		dispatch(sortGen(gender));
		modalMenuOC();
	};

	const scrollToBottom = () => {
		const body = document.body;
		const html = document.documentElement;
		const height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight,
		);
		window.scrollTo({
			top: height,
			behavior: 'smooth',
		});
		modalMenuOC();
	};

	return (
		<div className='fixed -top-0 z-50 m-[0] flex h-screen w-[375px] bg-negro bg-opacity-70 lg:hidden'>
			<nav className='m-0 w-[250px] bg-blanco px-[28px] py-[24px] text-[1.1em] font-bold'>
				<img
					src={x}
					alt='x icon'
					className='cursor-pointer'
					onClick={modalMenuOC}
				/>
				<ul className='mt-[50px] flex h-[250px] flex-col justify-between'>
					<Search modalMenuOC={modalMenuOC} />
					<li>
						<Link to={'/products'} onClick={() => handleGender('male')}>
							Hombre
						</Link>
					</li>
					<li>
						<Link to={'/products'} onClick={() => handleGender('female')}>
							Mujer
						</Link>
					</li>
					<li>
						<Link to={'/products'} onClick={() => handleGender('unisex')}>
							Unisex
						</Link>
					</li>
					<li>
						<Link to={'/aboutus'} onClick={modalMenuOC}>
							Nosotros
						</Link>
					</li>
					<li>
						<button onClick={() => scrollToBottom()}>Contacto</button>
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
