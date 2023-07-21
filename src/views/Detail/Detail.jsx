import ModalGallery from './ModalGallery';
import Gallery from './Gallery';
import Info from './Info';

const Detail = () => {
	return (
		<section className='m-auto w-[375px] lg:flex lg:w-[1115px] lg:gap-[124px] lg:px-[50px] lg:py-[90px]'>
			<Gallery />
			<Info />
			<ModalGallery />
		</section>
	);
};

export default Detail;
