import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { supabase } from '../../utils/Supabase';
import { signIn } from '../../redux/actions';
import PropTypes from 'prop-types';
import x from '../../assets/images/x-blue.svg';

const Login = ({ modalLoginOC }) => {
	const [login, setLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (error) {
				console.error('Error Login:', error.message);
				return;
			}
			console.log('Login successful:', data);
			dispatch(signIn(data.user));
			setEmail('');
			setPassword('');
			modalLoginOC();
		} catch (error) {
			console.error('Unknown error:', error.message);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						fullName: name,
					},
				},
			});
			if (error) {
				console.error('Error registering:', error.message);
				return;
			}
			console.log('Registration successful:', data);
			setName('');
			setEmail('');
			setPassword('');
			modalLoginOC();
		} catch (error) {
			console.error('Unknown error:', error.message);
		}
	};

	return (
		<div className='fixed left-0 top-0 z-50 m-[0] flex h-screen w-full items-center justify-center bg-negro bg-opacity-70'>
			{login ? (
				<div className='flex h-[380px] w-[350px] flex-col items-center rounded-[16px] bg-blanco'>
					<div className='ml-auto p-3'>
						<img
							src={x}
							alt='x icon'
							className=' h-[25px] w-[25px] cursor-pointer'
							onClick={modalLoginOC}
						/>
					</div>
					<h2 className='text-3xl font-bold'>Comunidad MOLO!</h2>
					<h3>Iniciar Sesión</h3>
					<form onSubmit={handleLogin} className='mx-auto w-[340px] p-3'>
						<label
							htmlFor='email'
							className='block pl-1 text-sm font-semibold text-azul'
						>
							Email
						</label>
						<input
							type='email'
							placeholder='Tu Email'
							className='mb-2 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
							value={email}
							id='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label
							htmlFor='password'
							className='block pl-1 text-sm font-semibold text-azul'
						>
							Contraseña
						</label>
						<input
							type='password'
							placeholder='Tu Contraseña'
							className='mb-3 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
							value={password}
							id='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className='mb-3 w-full rounded-md bg-azul px-4 py-2 font-semibold text-white duration-300 hover:bg-opacity-50'
							type='submit'
						>
							INGRESAR
						</button>
					</form>
					<p className='mb-2 flex justify-center'>
						Nuevo en MOLO?&nbsp;
						<span
							className='hover:text-secondaryDark cursor-pointer font-bold duration-300'
							onClick={() => setLogin(false)}
						>
							Registrate
						</span>
					</p>
				</div>
			) : (
				<div className='flex h-[440px] w-[350px] flex-col items-center rounded-[16px] bg-blanco'>
					<div className='ml-auto p-3'>
						<img
							src={x}
							alt='x icon'
							className=' h-[25px] w-[25px] cursor-pointer'
							onClick={modalLoginOC}
						/>
					</div>
					<h2 className='text-3xl font-bold'>Comunidad MOLO!</h2>
					<h3>Registrarse</h3>
					<form onSubmit={handleRegister} className='mx-auto w-[340px] p-3'>
						<label
							htmlFor='name'
							className='block pl-1 text-sm font-semibold text-azul'
						>
							Nombre
						</label>
						<input
							type='text'
							placeholder='Nombre'
							className='mb-2 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
							value={name}
							id='name'
							onChange={(e) => setName(e.target.value)}
						/>
						<label
							htmlFor='email'
							className='block pl-1 text-sm font-semibold text-azul'
						>
							Email
						</label>
						<input
							type='email'
							placeholder='Email'
							className='mb-2 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
							value={email}
							id='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label
							htmlFor='password'
							className='block pl-1 text-sm font-semibold text-azul'
						>
							Contraseña
						</label>
						<input
							type='password'
							placeholder='Contraseña'
							className='mb-3 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
							value={password}
							id='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className='mb-3 w-full rounded-md bg-azul px-4 py-2 font-semibold text-white duration-300 hover:bg-opacity-50'
							type='submit'
						>
							REGISTRAR
						</button>
					</form>
					<p className='mb-2 flex justify-center'>
						Ya formas parte de MOLO?&nbsp;
						<span
							className='hover:text-secondaryDark cursor-pointer font-bold duration-300'
							onClick={() => setLogin(true)}
						>
							Inicia Sesión
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

Login.propTypes = {
	modalLoginOC: PropTypes.func.isRequired,
};

export { Login };
