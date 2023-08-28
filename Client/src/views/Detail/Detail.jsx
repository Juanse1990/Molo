import { useState } from 'react';
import { Gallery, Info, ModalGallery } from './index';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
	const [modalGallery, setModalGallery] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const { id } = useParams();
	const imageIndexFunction = () => imageIndex;
	const filteredData = useSelector((state) => state.filteredData);
	const cloth = filteredData.filter((item) => item.id === id);

	const modalGalleryOC = () => {
		setModalGallery(!modalGallery);
	};

	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[50px]'>
			<Gallery
				modalGalleryOC={modalGalleryOC}
				images={() => cloth[0].images}
				imageIndex={imageIndexFunction}
				setImageIndex={setImageIndex}
			/>
			<Info cloth={() => cloth[0]} />
			{modalGallery && (
				<ModalGallery
					modalGalleryOC={modalGalleryOC}
					images={() => cloth[0].images}
					imageIndex={imageIndexFunction}
					setImageIndex={setImageIndex}
				/>
			)}
		</section>
	);
};

export default Detail;
