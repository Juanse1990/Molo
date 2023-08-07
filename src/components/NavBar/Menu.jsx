import { Link } from 'react-router-dom';
import { Search } from './index';
import { useDispatch } from 'react-redux';
import { sortGen } from '../../redux/actions';
import PropTypes from 'prop-types';

const Menu = ({ modalMenuOC }) => {
	const dispatch = useDispatch();

	const handleGender = (gender) => {
		dispatch(sortGen(gender));
	};

	return (
		<>
			<nav className='hidden w-[800px] lg:block'>
				<ul className='flex justify-between text-[1.2em] font-bold lg:ml-[20px]'>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link to={'/products'} onClick={() => handleGender('male')}>
							Hombre
						</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link to={'/products'} onClick={() => handleGender('female')}>
							Mujer
						</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link to={'/products'} onClick={() => handleGender('unisex')}>
							Unisex
						</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Nosotros</Link>
					</li>
					<li className='h-[112px] pt-[42px] hover:border-b-4 hover:border-azul'>
						<Link>Contacto</Link>
					</li>
					<Search modalMenuOC={modalMenuOC} />
				</ul>
			</nav>
		</>
	);
};

Menu.propTypes = {
	modalMenuOC: PropTypes.func.isRequired,
};

export default Menu;
