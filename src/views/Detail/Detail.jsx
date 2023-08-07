import { useState } from 'react';
import { Gallery, Info, ModalGallery } from './index';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
	const [modalGallery, setModalGallery] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const { id } = useParams();
	const imageIndexFunction = () => imageIndex;
	const images = () => [image1, image2, image3, image4];
	const filteredData = useSelector((state) => state.filteredData);
	const cloth = filteredData.filter((item) => item.id === id);

	const modalGalleryOC = () => {
		setModalGallery(!modalGallery);
	};

	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[90px]'>
			<Gallery
				modalGalleryOC={modalGalleryOC}
				images={images}
				imageIndex={imageIndexFunction}
				setImageIndex={setImageIndex}
			/>
			<Info cloth={cloth[0]} />
			{modalGallery && (
				<ModalGallery
					modalGalleryOC={modalGalleryOC}
					images={images}
					imageIndex={imageIndexFunction}
					setImageIndex={setImageIndex}
				/>
			)}
		</section>
	);
};

export default Detail;
