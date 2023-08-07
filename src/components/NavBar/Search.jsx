import { useDispatch, useSelector } from 'react-redux';
import search from '../../assets/images/search.svg';
import { useState } from 'react';
import { FILTER_DATA } from '../../redux/actions_types';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const data = useSelector((state) => state.data);
	const [filterSearch, setFilterSearch] = useState('');

	const filterData = (event) => {
		const searchFil = event.target.value;
		setFilterSearch(searchFil);
		navigate('/products');
		const filteredData = data.filter((item) => {
			const itemText = item.nombre.toLowerCase();
			return itemText.includes(searchFil.toLowerCase());
		});

		dispatch({ type: FILTER_DATA, payload: { filteredData } });
	};

	return (
		<li className='ml-[-8px] w-[150px] lg:h-[112px] lg:pt-[37px] lg:hover:border-b-4 lg:hover:border-azul'>
			<div className='relative flex w-[150px]'>
				<input
					type='text'
					placeholder='Buscar'
					value={filterSearch}
					onChange={filterData}
					className='w-full rounded-[8px] bg-azul bg-opacity-[0.25] p-[5px] text-negro outline-none placeholder:text-negro hover:bg-opacity-[0.5]'
				/>
				<img
					src={search}
					alt='Search'
					className='absolute right-[0px] mr-[3px] mt-[5px] h-[26px]'
				/>
			</div>
		</li>
	);
};

export default Search;
