import { useState } from 'react';
import Gallery from './Gallery';
import Info from './Info';
import ModalGallery from './ModalGallery';

const Detail = () => {
	const [modalGallery, setModalGallery] = useState(false);

	const modalGalleryOC = () => {
		setModalGallery(!modalGallery);
	};

	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[90px]'>
			<Gallery />
			<Info />
			{modalGallery && <ModalGallery modalGalleryOC={modalGalleryOC} />}
		</section>
	);
};

export default Detail;
