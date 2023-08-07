import PropTypes from 'prop-types';
import image1 from '../../assets/images/1.jpg';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const priceDiscount = item.descuento
		? (item.precio - item.precio / item.descuento).toFixed(2)
		: item.precio;
	console.log(item);
	return (
		<li className='h-[570px] w-[325px] cursor-pointer pt-8 lg:h-[515px] lg:w-[275px]'>
			<Link to={`/detail/${item.id}`}>
				<div className='group flex h-full flex-col rounded-2xl border shadow-md duration-300 hover:scale-95 hover:shadow-xl'>
					<div className='h-1/2'>
						<img
							className='h-[325px] w-full rounded-t-2xl object-cover lg:h-[275px]'
							src={image1}
							alt='image'
						/>
					</div>
					<div className='mx-4 mt-[5.5rem] lg:mt-[4rem]'>
						<div className='flex justify-between'>
							<p className='text-sm font-bold uppercase text-azul'>
								{item.marca}
							</p>
						</div>
						<div>
							<h3 className='mb-1 mt-2 text-xl font-semibold duration-1000'>
								{item.nombre}
							</h3>
							<p className='h-[50px] overflow-hidden text-sm'>
								{item.descripcion}
							</p>
						</div>
						{/* <div className='my-2'>
						<span className='bg-secondaryDark mr-2 mt-2 inline-block rounded-full px-2 py-1 text-xs font-semibold text-white duration-300 hover:scale-105'>
							{project.category}
						</span>
					</div> */}

						<div className='flex items-center justify-between'>
							<p className='flex items-center gap-[18px] text-[1.8em] font-bold'>
								${priceDiscount}
								{item.descuento ? (
									<span className='rounded-[8px] bg-red-500 bg-opacity-[0.1] p-[4px] text-[0.5em] text-red-500'>
										{item.descuento}%
									</span>
								) : null}
							</p>
							{item.descuento ? (
								<p className='text-bold text-azul line-through'>
									${item.precio}
								</p>
							) : null}
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
};

ProductCard.propTypes = {
	item: PropTypes.func.isRequired,
};

export default ProductCard;