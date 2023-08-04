import { useSelector } from 'react-redux';
import { ProductCard } from './index';

const Products = () => {
	const data = useSelector((state) => state.data);

	return (
		<div className='relative m-auto w-[375px] lg:w-[1115px]'>
			<ul className='flex w-full flex-wrap items-center justify-center lg:justify-between'>
				{data.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

export default Products;
