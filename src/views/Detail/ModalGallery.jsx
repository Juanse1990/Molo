import PropTypes from 'prop-types';
import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import x from '../../assets/images/x-blue.svg';

const ModalGallery = ({
	modalGalleryOC,
	images,
	imageIndex,
	setImageIndex,
}) => {
	return (
		<div className='hidden lg:fixed lg:-left-0 lg:-top-0 lg:z-50 lg:m-[0] lg:grid lg:h-screen lg:w-full lg:place-content-center lg:bg-negro lg:bg-opacity-70'>
			<article className='w-[470px]'>
				<div className='mb-[10px] flex justify-end'>
					<img
						src={x}
						alt='X'
						className='cursor-pointer'
						onClick={modalGalleryOC}
					/>
				</div>
				<div className='relative mb-[15px] h-[375px] w-full lg:h-[446px] lg:rounded-[16px]'>
					<img
						src={images()[imageIndex()]}
						alt='imagen'
						className='relative h-full w-full object-contain lg:h-[446px] lg:rounded-[16px] lg:bg-error-image'
					/>
					<img
						src={previous}
						alt='previous'
						onClick={() => {
							if (imageIndex() > 0) setImageIndex(imageIndex() - 1);
						}}
						className='absolute left-[10px] top-[203px] h-[40px] w-[40px] cursor-pointer rounded-[50%]'
					/>
					<img
						src={next}
						alt='next'
						onClick={() => {
							if (imageIndex() < 3) setImageIndex(imageIndex() + 1);
						}}
						className='absolute right-[10px] top-[203px] h-[40px] w-[40px] cursor-pointer rounded-[50%]'
					/>
				</div>
				<div className='flex justify-between'>
					<img
						id='1'
						src={images()[0]}
						alt='imagen'
						onClick={() => {
							setImageIndex(0);
						}}
						className='cursor-pointer object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:bg-error-image lg:hover:border-[2px] lg:hover:border-azul'
					/>
					<img
						id='2'
						src={images()[1]}
						alt='imagen'
						onClick={() => {
							setImageIndex(1);
						}}
						className='cursor-pointer object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:bg-error-image lg:hover:border-[2px] lg:hover:border-azul'
					/>
					<img
						id='3'
						src={images()[2]}
						alt='imagen'
						onClick={() => {
							setImageIndex(2);
						}}
						className='cursor-pointer object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:bg-error-image lg:hover:border-[2px] lg:hover:border-azul'
					/>
					<img
						id='4'
						src={images()[3]}
						alt='imagen'
						onClick={() => {
							setImageIndex(3);
						}}
						className='cursor-pointer object-contain lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:bg-error-image lg:hover:border-[2px] lg:hover:border-azul'
					/>
				</div>
			</article>
		</div>
	);
};

ModalGallery.propTypes = {
	modalGalleryOC: PropTypes.func.isRequired,
	images: PropTypes.func.isRequired,
	imageIndex: PropTypes.func.isRequired,
	setImageIndex: PropTypes.func.isRequired,
};

export default ModalGallery;
