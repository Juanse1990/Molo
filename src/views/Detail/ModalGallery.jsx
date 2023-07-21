import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import image from '../../assets/images/image1.jpg';

const ModalGallery = () => {
	return (
		<div className='hidden'>
			<article>
				<p>X</p>
				<div>
					<img src={previous} alt='previous' />
					<img src={next} alt='next' />
				</div>
				<div>
					<img id='1' src={image} alt='imagen' />
					<img id='2' src={image} alt='imagen' />
					<img id='3' src={image} alt='imagen' />
					<img id='4' src={image} alt='imagen' />
				</div>
			</article>
		</div>
	);
};

export default ModalGallery;
