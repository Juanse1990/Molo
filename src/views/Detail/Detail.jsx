import { useState } from 'react';
import { Gallery, Info, ModalGallery } from './index';

const Detail = () => {
	const [modalGallery, setModalGallery] = useState(false);

	const modalGalleryOC = () => {
		setModalGallery(!modalGallery);
	};

	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[90px]'>
			<Gallery modalGalleryOC={modalGalleryOC} />
			<Info />
			{modalGallery && <ModalGallery modalGalleryOC={modalGalleryOC} />}
		</section>
	);
};

export default Detail;
