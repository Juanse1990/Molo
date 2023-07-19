import ModalGallery from './ModalGallery';
import Gallery from './Gallery';
import Info from './Info';

const Detail = () => {
	return (
		<section className='w-[375px] m-auto lg:w-[1115px]'>
			<Gallery />
			<Info />
			<ModalGallery />
		</section>
	);
};

export default Detail;