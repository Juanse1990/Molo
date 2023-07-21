import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import image from '../../assets/images/image1.jpg';

const Gallery = () => {
	return (
		<article>
			<div className='relative h-[300px] w-full bg-gallery-image bg-cover bg-center lg:hover:cursor-pointer'>
				<img
					src={previous}
					alt='previous'
					className='absolute left-[10px] top-[140px] h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-blanco'
				/>
				<img
					src={next}
					alt='next'
					className='absolute right-[10px] top-[140px] h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-blanco'
				/>
			</div>
			<div className='hidden lg:block'>
				<img id='1' src={image} alt='imagen' />
				<img id='2' src={image} alt='imagen' />
				<img id='3' src={image} alt='imagen' />
				<img id='4' src={image} alt='imagen' />
			</div>
		</article>
	);
};

export default Gallery;
