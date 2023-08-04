import { useState } from 'react';
import { Gallery, Info, ModalGallery } from './index';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';

const Detail = () => {
	const [modalGallery, setModalGallery] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const images = [image1, image2, image3, image4];

	const modalGalleryOC = () => {
		setModalGallery(!modalGallery);
	};

	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[90px]'>
			<Gallery
				modalGalleryOC={modalGalleryOC}
				images={images}
				imageIndex={imageIndex}
				setImageIndex={setImageIndex}
			/>
			<Info />
			{modalGallery && (
				<ModalGallery
					modalGalleryOC={modalGalleryOC}
					images={images}
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
				/>
			)}
		</section>
	);
};

export default Detail;
