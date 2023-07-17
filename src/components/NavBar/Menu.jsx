import { Link } from 'react-router-dom';
import x from '../../assets/images/x.svg';
import cart from '../../assets/images/cart.svg';
import avatar from '../../assets/images/avatar.png';

const Menu = () => {
	return (
		<>
			<nav>
				<ul>
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
			<div>
				<nav>
					<img src={x} alt='x icon' className='white' />
					<ul>
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
			<div>
				<div>
					<div>3</div>
					<img src={cart} alt='carrito' />
				</div>
				<img src={avatar} alt='avatar' className='w-12 h-auto' />
			</div>
		</>
	);
};

export default Menu;
