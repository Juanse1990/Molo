import PropTypes from 'prop-types';
import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';

const Gallery = ({ modalGalleryOC, images, imageIndex, setImageIndex }) => {
	return (
		<article className='lg:w-[446px]'>
			<div className='relative mb-[15px] h-[375px] w-full lg:h-[446px] lg:rounded-[16px] lg:hover:cursor-pointer'>
				<img
					src={images()[imageIndex()]}
					alt='imagen'
					onClick={modalGalleryOC}
					className='relative h-full w-full object-contain lg:h-[446px] lg:rounded-[16px] lg:bg-error-image'
				/>
				<img
					src={previous}
					alt='previous'
					onClick={() => {
						if (imageIndex() > 0) setImageIndex(imageIndex() - 1);
					}}
					className='absolute left-[10px] top-[167px] h-[40px] w-[40px] cursor-pointer rounded-[50%] lg:hidden'
				/>
				<img
					src={next}
					alt='next'
					onClick={() => {
						if (imageIndex() < 3) setImageIndex(imageIndex() + 1);
					}}
					className='absolute right-[10px] top-[167px] h-[40px] w-[40px] cursor-pointer rounded-[50%] lg:hidden'
				/>
			</div>
			<div className='hidden lg:flex lg:justify-between'>
				<img
					id='1'
					src={images()[0]}
					alt='imagen'
					onClick={() => {
						setImageIndex(0);
					}}
					className='cursor-pointer bg-error-image object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='2'
					src={images()[1]}
					alt='imagen'
					onClick={() => {
						setImageIndex(1);
					}}
					className='cursor-pointer bg-error-image object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='3'
					src={images()[2]}
					alt='imagen'
					onClick={() => {
						setImageIndex(2);
					}}
					className='cursor-pointer bg-error-image object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='4'
					src={images()[3]}
					alt='imagen'
					onClick={() => {
						setImageIndex(3);
					}}
					className='cursor-pointer bg-error-image object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
			</div>
		</article>
	);
};

Gallery.propTypes = {
	modalGalleryOC: PropTypes.func.isRequired,
	images: PropTypes.func.isRequired,
	imageIndex: PropTypes.func.isRequired,
	setImageIndex: PropTypes.func.isRequired,
};

export default Gallery;
