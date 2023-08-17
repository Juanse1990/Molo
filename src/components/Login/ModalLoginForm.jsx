import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { supabase } from '../../utils/Supabase';
import { signIn } from '../../redux/actions';
import PropTypes from 'prop-types';
import x from '../../assets/images/x-blue.svg';
import { ValidateEmail, ValidatePassword, ValidateName } from './validate';

const Login = ({ modalLoginOC }) => {
	const [login, setLogin] = useState(true);
	const [form, setForm] = useState({ name: '', email: '', password: '' });
	const [error, setError] = useState({
		errorName: '',
		errorEmail: '',
		errorPassword: '',
	});
	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: form.email,
				password: form.password,
			});
			if (error) {
				console.error('Error Login:', error.message);
				return;
			}
			console.log('Login successful:', data);
			dispatch(signIn(data.user));
			setForm({ name: '', email: '', password: '' });
			modalLoginOC();
		} catch (error) {
			console.error('Unknown error:', error.message);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const { data, error } = await supabase.auth.signUp({
				email: form.email,
				password: form.password,
				options: {
					data: {
						fullName: form.name,
					},
				},
			});
			if (error) {
				console.error('Error registering:', error.message);
				return;
			}
			console.log('Registration successful:', data);
			setForm({ name: '', email: '', password: '' });
			modalLoginOC();
		} catch (error) {
			console.error('Unknown error:', error.message);
		}
	};

	const handleChangeEmail = (e) => {
		try {
			setForm((prevForm) => ({
				...prevForm,
				email: e.target.value,
			}));
			ValidateEmail(form.email) &&
				setError((prevForm) => ({ ...prevForm, errorEmail: '' }));
		} catch (error) {
			setError((prevForm) => ({
				...prevForm,
				errorEmail: error,
			}));
		}
	};

	const handleChangePassword = (e) => {
		try {
			setForm((prevForm) => ({
				...prevForm,
				password: e.target.value,
			}));
			ValidatePassword(form.password) &&
				setError((prevForm) => ({ ...prevForm, errorPassword: '' }));
		} catch (error) {
			setError((prevForm) => ({
				...prevForm,
				errorPassword: error,
			}));
		}
	};

	const handleChangeName = (e) => {
		try {
			setForm((prevForm) => ({
				...prevForm,
				name: e.target.value,
			}));
			ValidateName(form.name) &&
				setError((prevForm) => ({ ...prevForm, errorName: '' }));
		} catch (error) {
			setError((prevForm) => ({
				...prevForm,
				errorName: error,
			}));
		}
	};

	return (
		<div className='fixed left-0 top-0 z-50 m-[0] flex h-screen w-full items-center justify-center bg-negro bg-opacity-70'>
			{login ? (
				<div className='flex h-[390px] w-[350px] flex-col items-center rounded-[16px] bg-blanco'>
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
						<div className='mb-1 h-[80px]'>
							<label
								htmlFor='email'
								className='block pl-1 text-sm font-semibold text-azul'
							>
								Email
							</label>
							<input
								type='email'
								placeholder='Tu Email'
								className='h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
								value={form.email}
								id='email'
								onChange={handleChangeEmail}
							/>
							{error.errorEmail && (
								<p className='mb-1 ml-1 text-sm font-semibold text-red-600'>
									{error.errorEmail.message}
								</p>
							)}
						</div>
						<div className='h-[80px]'>
							<label
								htmlFor='password'
								className='block pl-1 text-sm font-semibold text-azul'
							>
								Contraseña
							</label>
							<input
								type='password'
								placeholder='Tu Contraseña'
								className='h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
								value={form.password}
								id='password'
								onChange={handleChangePassword}
							/>
							{error.errorPassword && (
								<p className='mb-1 ml-1 text-sm font-semibold text-red-600'>
									{error.errorPassword.message}
								</p>
							)}
						</div>
						<button
							className='mt-3 w-full rounded-md bg-azul px-4 py-2 font-semibold text-white duration-300 hover:bg-opacity-50'
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
				<div className='flex h-[470px] w-[350px] flex-col items-center rounded-[16px] bg-blanco'>
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
						<div className='mb-1 h-[80px]'>
							<label
								htmlFor='name'
								className='block pl-1 text-sm font-semibold text-azul'
							>
								Nombre
							</label>
							<input
								type='text'
								placeholder='Nombre'
								className='h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
								value={form.name}
								id='name'
								onChange={handleChangeName}
							/>
							{error.errorName && (
								<p className='mb-1 ml-1 text-sm font-semibold text-red-600'>
									{error.errorName.message}
								</p>
							)}
						</div>
						<div className='mb-1 h-[80px]'>
							<label
								htmlFor='email'
								className='block pl-1 text-sm font-semibold text-azul'
							>
								Email
							</label>
							<input
								type='email'
								placeholder='Tu Email'
								className='h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
								value={form.email}
								id='email'
								onChange={handleChangeEmail}
							/>
							{error.errorEmail && (
								<p className='mb-1 ml-1 text-sm font-semibold text-red-600'>
									{error.errorEmail.message}
								</p>
							)}
						</div>
						<div className='h-[80px]'>
							<label
								htmlFor='password'
								className='block pl-1 text-sm font-semibold text-azul'
							>
								Contraseña
							</label>
							<input
								type='password'
								placeholder='Tu Contraseña'
								className='h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-azul'
								value={form.password}
								id='password'
								onChange={handleChangePassword}
							/>
							{error.errorPassword && (
								<p className='mb-1 ml-1 text-sm font-semibold text-red-600'>
									{error.errorPassword.message}
								</p>
							)}
						</div>
						<button
							className='mt-3 w-full rounded-md bg-azul px-4 py-2 font-semibold text-white duration-300 hover:bg-opacity-50'
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
