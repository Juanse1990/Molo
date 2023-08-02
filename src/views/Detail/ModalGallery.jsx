import PropTypes from 'prop-types';
import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import x from '../../assets/images/x-blue.svg';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';

const ModalGallery = ({ modalGalleryOC }) => {
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
				<div className='relative mb-[15px] h-[470px] rounded-[16px] bg-gallery-image bg-cover bg-center'>
					<img
						src={previous}
						alt='previous'
						className='absolute left-[10px] top-[203px] h-[40px] w-[40px] cursor-pointer rounded-[50%]'
					/>
					<img
						src={next}
						alt='next'
						className='absolute right-[10px] top-[203px] h-[40px] w-[40px] cursor-pointer rounded-[50%]'
					/>
				</div>
				<div className='flex justify-between'>
					<img
						id='1'
						src={image1}
						alt='imagen'
						className='h-[90px] w-[90px] cursor-pointer rounded-[16px] hover:border-[2px] hover:border-azul'
					/>
					<img
						id='2'
						src={image2}
						alt='imagen'
						className='h-[90px] w-[90px] cursor-pointer rounded-[16px] hover:border-[2px] hover:border-azul'
					/>
					<img
						id='3'
						src={image3}
						alt='imagen'
						className='h-[90px] w-[90px] cursor-pointer rounded-[16px] hover:border-[2px] hover:border-azul'
					/>
					<img
						id='4'
						src={image4}
						alt='imagen'
						className='h-[90px] w-[90px] cursor-pointer rounded-[16px] hover:border-[2px] hover:border-azul'
					/>
				</div>
			</article>
		</div>
	);
};

ModalGallery.propTypes = {
	modalGalleryOC: PropTypes.func.isRequired,
};

export default ModalGallery;
