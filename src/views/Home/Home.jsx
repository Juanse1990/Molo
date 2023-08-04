import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='flex justify-center'>
			<Link to={'/products'} className='text-[3em]'>
				Go to Products!
			</Link>
		</div>
	);
};

export default Home;
