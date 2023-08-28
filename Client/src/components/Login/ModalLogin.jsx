import PropTypes from 'prop-types';
import { Login } from './ModalLoginForm';
import { supabase } from '../../utils/Supabase';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux';

const ModalLogin = ({ modalLoginOC }) => {
	const dispatch = useDispatch();
	const logged = useSelector((state) => state.logged);

	const LogOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				console.error('Error Login:', error.message);
			}
			dispatch(logOut());
			modalLoginOC();
		} catch (error) {
			console.error('Unknown error:', error.message);
		}
	};

	return (
		<>
			{logged ? (
				<div className='absolute right-[6px] top-[75px] z-40 m-auto flex h-[80px] w-[360px] flex-col items-center justify-around rounded-[8px] bg-blanco shadow-lg'>
					<button
						className='text-bold flex h-[57px] w-[300px] items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'
						onClick={() => LogOut()}
					>
						Cerrar Sesión
					</button>
				</div>
			) : (
				<Login modalLoginOC={modalLoginOC} />
			)}
		</>
	);
};

ModalLogin.propTypes = {
	modalLoginOC: PropTypes.func.isRequired,
};

export default ModalLogin;
