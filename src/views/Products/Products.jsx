import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
	const data = useSelector((state) => state.data);

	return (
		<div>
			<Link to={'/detail/5'} className='text-[3em]'>
				Go to Detail!
			</Link>
			<p>{data}</p>
		</div>
	);
};

export default Products;
