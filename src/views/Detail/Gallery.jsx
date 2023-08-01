import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';

const Gallery = () => {
	return (
		<article className='lg:w-[446px]'>
			<div className='relative h-[300px] w-full bg-gallery-image bg-cover bg-center lg:h-[446px] lg:rounded-[16px] lg:hover:cursor-pointer'>
				<img
					src={previous}
					alt='previous'
					className='absolute left-[10px] top-[140px] h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-blanco lg:hidden'
				/>
				<img
					src={next}
					alt='next'
					className='absolute right-[10px] top-[140px] h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-blanco lg:hidden'
				/>
			</div>
			<div className='hidden lg:flex lg:justify-between lg:hover:cursor-pointer'>
				<img
					id='1'
					src={image1}
					alt='imagen'
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='2'
					src={image2}
					alt='imagen'
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='3'
					src={image3}
					alt='imagen'
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
				<img
					id='4'
					src={image4}
					alt='imagen'
					className='lg:h-[90px] lg:w-[90px] lg:rounded-[16px] lg:hover:border-[2px] lg:hover:border-azul'
				/>
			</div>
		</article>
	);
};

export default Gallery;
