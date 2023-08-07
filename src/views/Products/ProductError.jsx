const ProductError = () => {
	return (
		<div className='mt-5 flex h-[500px] w-screen items-center justify-center overflow-hidden'>
			<div className='text-6xlxl absolute font-medium text-negro'>
				<div className='absolute top-0 h-full w-full scale-110 rounded border-[3px] border-amarillo bg-blanco drop-shadow-xl' />
				<div className='relative '>
					<h2 className='flex items-center justify-center text-6xl font-medium'>
						MOLO
					</h2>
					<p className='pb-3 pt-1 text-xl'>No hay productos disponibles.</p>
				</div>
			</div>
			<div className=' h-[500px] w-[1115px] bg-error-image'></div>
		</div>
	);
};

export default ProductError;
