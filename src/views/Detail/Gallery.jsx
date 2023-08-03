import PropTypes from 'prop-types';
import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import { useState } from 'react';

const Gallery = ({ modalGalleryOC }) => {
	const [imageIndex, setImageIndex] = useState(0);
	const images = [image1, image2, image3, image4];

	return (
		<article className='lg:w-[446px]'>
			<div className='relative mb-[15px] h-[375px] w-full lg:h-[446px] lg:rounded-[16px] lg:hover:cursor-pointer'>
				<img
					src={images[imageIndex]}
					alt='imagen'
					onClick={modalGalleryOC}
					className='relative h-full w-full lg:h-[446px] lg:rounded-[16px]'
				/>
				<img
					src={previous}
					alt='previous'
					onClick={() => {
						if (imageIndex > 0) setImageIndex(imageIndex - 1);
					}}
					className='absolute left-[10px] top-[167px] h-[40px] w-[40px] cursor-pointer rounded-[50%] lg:hidden'
				/>
				<img
					src={next}
					alt='next'
					onClick={() => {
						if (imageIndex < 3) setImageIndex(imageIndex + 1);
					}}
					className='absolute right-[10px] top-[167px] h-[40px] w-[40px] cursor-pointer rounded-[50%] lg:hidden'
				/>
			</div>
			<div className='hidden lg:flex lg:justify-between lg:hover:cursor-pointer'>
				<img
					id='1'
					src={image1}
					alt='imagen'
					onClick={() => {
						setImageIndex(0);
					}}
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='2'
					src={image2}
					alt='imagen'
					onClick={() => {
						setImageIndex(1);
					}}
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='3'
					src={image3}
					alt='imagen'
					onClick={() => {
						setImageIndex(2);
					}}
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='4'
					src={image4}
					alt='imagen'
					onClick={() => {
						setImageIndex(3);
					}}
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
			</div>
		</article>
	);
};

Gallery.propTypes = {
	modalGalleryOC: PropTypes.func.isRequired,
};

export default Gallery;
