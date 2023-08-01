import previous from '../../assets/images/previous.svg';
import next from '../../assets/images/next.svg';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';

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
					<img id='1' src={image1} alt='imagen' />
					<img id='2' src={image2} alt='imagen' />
					<img id='3' src={image3} alt='imagen' />
					<img id='4' src={image4} alt='imagen' />
				</div>
			</article>
		</div>
	);
};

export default ModalGallery;
