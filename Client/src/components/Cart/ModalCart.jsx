import { useDispatch, useSelector } from 'react-redux';
import { modalCartInfo } from '../../redux/actions';
import { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { supabase } from '../../utils/Supabase';
import axios from 'axios';
import PropTypes from 'prop-types';
import trash from '../../assets/images/delete.svg';

const ModalCart = ({ modalLoginOC }) => {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.name);
	const size = useSelector((state) => state.size);
	const quantity = useSelector((state) => state.quantity);
	const price = useSelector((state) => state.price);
	const image = useSelector((state) => state.image);
	const logged = useSelector((state) => state.logged);
	const [preferenceId, setPreferenceId] = useState(null);

	initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, { locale: 'es-AR' });

	const createPreference = async () => {
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			const metadata = user.user_metadata;

			const response = await axios.post(
				`${import.meta.env.VITE_SERVER}/create_preference`,
				{
					description: name,
					currency_id: 'ARS',
					image,
					quantity,
					price,
					name: metadata.fullName,
					email: user.email,
					address: metadata.address,
					number: metadata.number,
				},
			);
			const { id } = response.data;
			return id;
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = () => {
		dispatch(modalCartInfo('', '', 0, 0, ''));
	};

	const handlePayment = async () => {
		logged === false && modalLoginOC();
		if (logged) {
			const id = await createPreference();
			if (id) {
				setPreferenceId(id);
			}
		}
	};

	return (
		<div className='absolute right-[6px] top-[75px] z-40 h-[335px] w-[360px] rounded-[8px] bg-blanco shadow-lg lg:h-[335px] lg:w-[380px]'>
			<p className='border-b-[1px]  border-azul p-[24px] font-bold'>Cart</p>
			{price ? (
				<div className='p-[24px]'>
					<div className='mb-[24px] flex items-center justify-between'>
						<img
							src={image}
							alt='image'
							className='h-[60px] w-[60px] rounded-[4px]'
						/>
						<div>
							<p>{name}</p>
							<p>Talle: {size}</p>
							<p>
								${price} x {quantity}{' '}
								<span className='font-bold'>
									${(price * quantity).toFixed(2)}
								</span>
							</p>
						</div>
						<img
							src={trash}
							alt='delete'
							onClick={handleDelete}
							className='cursor-pointer'
						/>
					</div>
					<button
						className='text-bold flex h-[57px] w-full items-center justify-center gap-[16px] rounded-[8px] bg-azul text-[0.9em] text-blanco hover:opacity-[0.5]'
						onClick={handlePayment}
					>
						Pagar
					</button>
					{logged && preferenceId && (
						<Wallet
							initialization={{
								preferenceId,
								redirectMode: 'modal',
							}}
						/>
					)}
				</div>
			) : (
				<div className='mt-[40px] flex items-center justify-center p-[24px]'>
					<p>No hay articulos aun</p>
				</div>
			)}
		</div>
	);
};

ModalCart.propTypes = {
	modalLoginOC: PropTypes.func.isRequired,
};

export default ModalCart;
