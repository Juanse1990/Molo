import { useSelector } from 'react-redux';
import { ProductCard } from './index';

const Products = () => {
	const filteredData = useSelector((state) => state.filteredData);

	return (
		<div className='relative m-auto w-[375px] lg:w-[1115px]'>
			<ul className='lg:justify- flex w-full flex-wrap items-center justify-around'>
				{filteredData.map((item) => (
					<ProductCard key={item.id} item={() => item} />
				))}
			</ul>
		</div>
	);
};

export default Products;
