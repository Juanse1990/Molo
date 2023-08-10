import { useState } from 'react';

const ModalLogin = () => {
	const [logged, setLogged] = useState(true);
	return (
		<>
			{logged ? (
				<div className=' absolute right-[6px] top-[75px] z-40 m-auto flex h-[80px] w-[360px] flex-col items-center justify-around rounded-[8px] bg-blanco shadow-lg'>
					<button
						className='text-bold flex h-[57px] w-[300px] items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'
						onClick={() => {
							setLogged(false);
						}}
					>
						Cerrar Sesión
					</button>
				</div>
			) : (
				<div className=' absolute right-[6px] top-[75px] z-40 m-auto flex h-[160px] w-[360px] flex-col items-center justify-around rounded-[8px] bg-blanco shadow-lg'>
					<button
						className='text-bold flex h-[57px] w-[300px] items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'
						onClick={() => {
							setLogged(true);
						}}
					>
						Iniciar Sesión
					</button>
					<button
						className='text-bold flex h-[57px] w-[300px] items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'
						onClick={() => {
							setLogged(true);
						}}
					>
						Registrarse
					</button>
				</div>
			)}
		</>
	);
};

export default ModalLogin;
