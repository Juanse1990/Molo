import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<div>
			<Link to={'/detail'} className='text-[3em]'>
				Go to Detail!
			</Link>
		</div>
	);
};

export default Products;