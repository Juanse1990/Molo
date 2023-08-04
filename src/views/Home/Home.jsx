import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to={'/detail/5'} className='text-[3em]'>
				Go to Detail!
			</Link>
			<br />
			<Link to={'/products'} className='text-[3em]'>
				Go to Products!
			</Link>
		</div>
	);
};

export default Home;
