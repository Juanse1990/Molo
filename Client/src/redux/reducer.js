import {
	FILTER_DATA,
	MODAL_CART_INFO,
	SORT_GEN,
	SIGN_IN,
	LOG_OUT,
} from './actions_types';

const data = [
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '0',
		nombre: 'Remera BSC Negra',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 2, 2, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11421-fd6093fdf4a6aad61316766352702557-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11451-0d4435e62a0ff6036a16766352677646-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11341-923c6c4c5d8c65be8216766352678699-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11371-0198fabd0075e07d9f16766352685952-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '1',
		nombre: 'Remera BSC Gris',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/12901-ba5757871265d8f58d16766354554555-1024-1024.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/12801-9950ba498b5ea6101716766354538847-1024-1024.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/12811-570750fab908944dc116766354544561-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/12831-8e10c294dc3f8569bd16766354544411-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '2',
		nombre: 'Remera Merch Logos Negra',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 0, 0, 0, 0, 0, 1],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-2-de-marzo229741-ab61ccedefa477466b16523660396622-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-2-de-marzo229551-9219159a2300260b4716523660397004-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-2-de-marzo229711-63cb29fa84eb84c5bb16523660399053-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-2-de-marzo229681-2f869fc3d31816328816523660397477-1024-1024.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'bermuda',
		id: '3',
		nombre: 'Bermuda 92',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11031-d000f007710a17d2ac16765618432962-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11161-4f39cf85a7b86a270216765618435645-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11241-2439a68ca77e2c28ea16765618434458-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/11151-542fe6e519dd1321d216765618433807-1024-1024.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '4',
		nombre: 'Remera Alfon',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-2-de-marzo229241-c6af5636c2db3dc8d716523654496651-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'musculosa',
		id: '5',
		nombre: 'Musculosa Niza',
		precio: 10000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-31-de-enero83891-a3e3f6c4b76e28b5c116443354809115-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-31-de-enero83921-65f2d5acc54c0ae2f116443354810679-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-31-de-enero84041-909f9d96d5a2c6a26316443354808314-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/seg-basset-31-de-enero83961-09dbb4c3ff7dbbd06216443354821293-640-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'top',
		id: '6',
		nombre: 'Top Helena Rosada',
		precio: 9000.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset37181-4a5aa387dd01bdc49316359756738606-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset370911-e07f09e63a525bfbcf16359756737120-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset37061-26f80a950683d475f316359756743160-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset36971-6f0c42b13fada0042f16359756738506-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'calza',
		id: '7',
		nombre: 'Calza Biker Linda Rosada',
		precio: 9000.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset37091-e07f09e63a525bfbcf16359754692596-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/znbasset36951-911f30cd00218f250816359754696529-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/zn_359251-10ed903517fe80612016687425621111-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/zn_358961-3f214edbaa4c48efa416687425621052-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'musculosa',
		id: '8',
		nombre: 'Musculosa Energy Negra',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 0, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/09461-9ec8219772191efd8616764952531933-640-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'musculosa',
		id: '9',
		nombre: 'Musculosa Energy Blanca',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/10291-cd9ea4e31de9c9c55b16764950355272-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'medias',
		id: '10',
		nombre: 'Pack de Medias',
		precio: 9000.0,
		descuento: 0,
		talles: [0, 0, 0, 0, 0, 0, 2],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/20281-b32a3de968600772ee16776177857988-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/20221-2d33ec14f2308c91e616776177857542-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/20291-ef1199fc37c750b92916854776616985-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/920/457/products/20211-8bc62eb5ea0fb5920e16776181988837-1024-1024.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '11',
		nombre: 'Remera Montreal Negra',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/15691-00c3ad44e52c09fbcc16814179403452-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15741-0a774d7f5c9d15d83a16814179402774-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15751-eeac91f010d4c5bfda16814179403375-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15731-53b76c9080f1f5ff4f16814179403129-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'remera',
		id: '12',
		nombre: 'Remera Montreal Blanca',
		precio: 11000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/15451-3e9766610bfa5bc41116814182478356-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15461-a57c4561ef7302efdc16814182480778-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15471-4d6c873467385a673a16814182481379-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/15401-1466b7db0f13ab05eb16814182478442-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'short',
		id: '13',
		nombre: 'Short Munich Gris',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/106011-b77aa828cad133abe216765642109138-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/105711-6172a8d9813b93002016765642107921-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/106111-50477b0ad78e9948e116765642111676-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/104111-a2bd9b2cf9bbb508cc16765642107582-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'top',
		id: '14',
		nombre: 'Top Tech-X',
		precio: 12500.0,
		descuento: 0,
		talles: [0, 1, 0, 2, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto252821-3f38e6a6190644d0b416924638702451-1024-1024.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto252941-ddc074ae87bffe8e0c16924638719135-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto252801-40cb7219f65b51db9d16924638708969-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto252931-b1ee7c8c501a4e462616924638700561-480-0.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'short',
		id: '15',
		nombre: 'MiniShort Tech-X',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto253261-778c6c2118c80fa6de16924636654945-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto2532411-6742c44c0e139c249816924636639765-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto253301-13281c0f7c6cb10b6616924636642315-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-16-de-agosto253431-9fb7bd6860b39d04b016924636636910-1024-1024.webp',
		],
	},
	{
		marca: 'BASSET',
		prenda: 'short',
		id: '16',
		nombre: 'Short Factory',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-2-de-marzo226401-941ea8ff51f36a3d1816523675833918-1024-1024.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-2-de-marzo226441-d1ec9c0c70840e0e7c16523675823818-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-2-de-marzo226491-bab9b1ec93f747783416523675823332-480-0.webp',
			'https://acdn.mitiendanube.com/stores/920/457/products/seg-basset-2-de-marzo226431-976749cf3fbd93725516523675838800-480-0.webp',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'short',
		id: '101',
		nombre: 'Short Race',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 0, 0],
		genero: 'hombre',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1789-ropa_deportiva_por_mayor_Short_race_amarillo-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1790-ropa_deportiva_por_mayor_Short_race_amarillo_2-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '102',
		nombre: 'Musculosa Arya Rosa',
		precio: 6000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1829-ropa_deportiva_por_mayor_Musculosa_arya_rosa-6-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '103',
		nombre: 'Musculosa Arya Azul',
		precio: 6000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1827-ropa_deportiva_por_mayor_Musculosa_arya_azul-6-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'campera',
		id: '104',
		nombre: 'Campera Nimbus Azul',
		precio: 20000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1814-ropa_deportiva_por_mayor_Campera_nimbus-1-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1813-ropa_deportiva_por_mayor_Campera_nimbus_3-5-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1815-ropa_deportiva_por_mayor_Campera_nimbus_2-1-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'campera',
		id: '105',
		nombre: 'Campera Nimbus Rosa',
		precio: 20000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1843-ropa_deportiva_por_mayor_Campera_Nimbus_guinda-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'calza',
		id: '106',
		nombre: 'Calza Pescadora Training Negra',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1840-ropa_deportiva_por_mayor_Pescadora_training_negro.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1841-ropa_deportiva_por_mayor_Pescadora_training_negro2.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'calza',
		id: '107',
		nombre: 'Calza Pescadora Training Azul',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1842-ropa_deportiva_por_mayor_Pescadora_training_azul.jpg',
			'',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '108',
		nombre: 'Musculosa Amarela',
		precio: 8500.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1800-ropa_deportiva_por_mayor_Musculosa_amarela_2-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1801-ropa_deportiva_por_mayor_Musculosa_amarela-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'remera',
		id: '109',
		nombre: 'Remera Trend Blanca',
		precio: 8000.0,
		descuento: 0,
		talles: [0, 1, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1777-ropa_deportiva_por_mayor_Remera_trend_blanco_2-6-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1778-ropa_deportiva_por_mayor_Remera_trend_blanco-1-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'remera',
		id: '110',
		nombre: 'Remera Trend Negra',
		precio: 8000.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1785-ropa_deportiva_por_mayor_Remera_trend_negro-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'calza',
		id: '111',
		nombre: 'Calza Legging Boston',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 0, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1569-ropa_deportiva_por_mayor_Legging_boston_turquesa_3-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1568-ropa_deportiva_por_mayor_Legging_boston_turquesa-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1567-ropa_deportiva_por_mayor_Legging_boston_gris_2-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1566-ropa_deportiva_por_mayor_Legging_boston_gris-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '112',
		nombre: 'Musculosa Tiffany Blanco',
		precio: 9500.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1504-ropa_deportiva_por_mayor_Musculosa_Tiffany_Blanco_2-5-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '113',
		nombre: 'Musculosa Tiffany Celeste',
		precio: 9500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1506-ropa_deportiva_por_mayor_Musculosa_Tiffany_Turquesa_2-4-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'musculosa',
		id: '114',
		nombre: 'Musculosa Tiffany Coral',
		precio: 9500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1509-ropa_deportiva_por_mayor_Musculosa_Tiffany_Coral_2-1-300x450.jpg',
			// 'https://mayoristas.aguafitness.com/wp-content/uploads/1510-ropa_deportiva_por_mayor_Musculosa_Tiffany_Negro_2-5-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'remera',
		id: '115',
		nombre: 'Remera Mich Negro',
		precio: 9000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 1, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1077-ropa_deportiva_por_mayor_Remera_Mich_3-4-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1076-ropa_deportiva_por_mayor_Remera_Mich_2-13-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1565-ropa_deportiva_por_mayor_af-102_1-11-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'remera',
		id: '116',
		nombre: 'Remera Mich Gris',
		precio: 9000.0,
		descuento: 0,
		talles: [0, 1, 0, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1565-ropa_deportiva_por_mayor_af-102_1-11-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1077-ropa_deportiva_por_mayor_Remera_Mich_3-4-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1076-ropa_deportiva_por_mayor_Remera_Mich_2-13-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'top',
		id: '117',
		nombre: 'Top Seamless Gris',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 0, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1212-ropa_deportiva_por_mayor_OI_2018_-_AF_135-6-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'calza',
		id: '118',
		nombre: 'Calza Chupin Balanz',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1353-ropa_deportiva_por_mayor_Chupin_Balanz_-_Gris_2-6-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1354-ropa_deportiva_por_mayor_Chupin_Balanz_-_Negro_2-6-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1355-ropa_deportiva_por_mayor_Chupin_Balanz_-_Guinda_2-6-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'pollera',
		id: '119',
		nombre: 'Pollera Con Short Black',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 0, 1, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1293-ropa_deportiva_por_mayor_Art_12-11401-Negro-5-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1294-ropa_deportiva_por_mayor_Art_12-11401-Negro_3-1-300x450.jpg',
		],
	},
	{
		marca: 'AGUA FITNESS',
		prenda: 'top',
		id: '120',
		nombre: 'Top Essential Rosado',
		precio: 14000.0,
		descuento: 0,
		talles: [0, 0, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://mayoristas.aguafitness.com/wp-content/uploads/1199-ropa_deportiva_por_mayor_Top_essential_chicle-300x450.jpg',
			'https://mayoristas.aguafitness.com/wp-content/uploads/1200-ropa_deportiva_por_mayor_Top_essential_chicle_2-300x450.jpg',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '201',
		nombre: 'Remera Oversize University Black',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230603-wa00201-f6b4cdb0aa37dea9e616884005913534-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230504-wa00161-f5c3d34540a3e020a016832198809354-640-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '202',
		nombre: 'Remera Oversize Tiger Lila',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230504-wa00121-249b648259b81ab9d316832201354634-320-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '203',
		nombre: 'Remera Oversize Roar White',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230615-wa00161-48f8e1bf64bd6e341c16884941345056-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230504-wa00111-34933a597b97475da416832191931474-640-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '204',
		nombre: 'Remera Oversize Element White',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/7b7c7ccede8fd823880348697b9f7927257666111-d9952eb019ecaba01616826079210027-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/22c02a1b094e27eb3d0e06dc747fb7dcdfa56e7e1-27aa779f2639fcdb0816826079209406-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '205',
		nombre: 'Remera Oversize Aest Purple',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 0, 0, 1, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230413-wa00131-304b7b9da06823175a16814077375711-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230413-wa00141-b54141df15b900736a16814077375550-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-611-1123833d31ff6342b816835714745314-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-601-d74bc80f82901551e716835714744232-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '206',
		nombre: 'Remera Oversize University White',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230504-wa00151-ca8d0d64dceecb2a4e16832199659028-320-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '207',
		nombre: 'Remera Performance Raised Green',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230304-wa00251-132f44fbb76cc4d04516779450255945-320-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-181-364ac9870a3749aeef16835555109779-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-191-e4f6d4e3371ed4dc9316835555107590-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '208',
		nombre: 'Remera Performance Worldwide Green',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 0, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-05-15-a-las-08-38-481-454b3a5a658abac1e816858013265243-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-04-21-a-las-16-01-5811-1f2a24ca190f0137dd16821045271375-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-351-3c5a6640163de3b20016852079495456-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-341-4a47e1f95eb6fb749a16852079493323-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '209',
		nombre: 'Remera Performance Worldwide Black',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-05-15-a-las-08-38-461-4f80587718c8f6346016858027384618-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-04-21-a-las-16-01-5711-ca1942d61468fc52ed16821053618837-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-331-a033fe35d4c7d86ebf16852075049131-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-321-889b04144b56dcbb8916852075045486-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '210',
		nombre: 'Remera Performance NBD Black',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-05-15-a-las-08-38-421-f0bd179ddfcc59f42416858015813046-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-04-21-a-las-16-01-561-a88fdbb8bdb65dcba816821056364799-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-391-6dc0c6ce7958d1992e16852087546619-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-381-2825817a7713379af116852087548509-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '211',
		nombre: 'Remera Oversize Raised White',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-231-d75340344b6d2a867116835589791320-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-221-513ee2a07f4e46a19416835589790744-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-02-09-a-las-16-28-221-d909fec47416c480da16779481380818-640-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '212',
		nombre: 'Remera Oversize Tiger Grey',
		precio: 13000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2022-12-01-a-las-10-21-231-a3292f202e4282203116700785124525-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2022-11-07-a-las-15-18-25saassdadasd1-5225bbbeb2c33114a216678510927370-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/agos-fuarkk-311-b6f70134b6cea0bd6416868518645175-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/agos-fuarkk-301-4b7bc74cbfb291e94016868518636786-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'remera',
		id: '213',
		nombre: 'Remera Performance New Skull',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 0, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-05-15-a-las-08-38-431-ca13c470dffc7d223b16858028223914-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2023-04-21-a-las-16-01-571-088ad4820e702c8af516821057312921-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-411-da3c9db51bd8db151216852094464333-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/juani-fuark_-401-6e731e98635a5336f616852094462218-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'musculosa',
		id: '214',
		nombre: 'Musculosa Rustic University Pink',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/imagen-de-whatsapp-2022-12-03-a-las-aaaassasasaassa1-e91be3090c80ec884816700882646723-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2022-11-14-at-13-30-46-11-1226af21886053049e16700881929236-640-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'musculosa',
		id: '215',
		nombre: 'Musculosa Rustic Raised Black',
		precio: 12000.0,
		descuento: 0,
		talles: [0, 0, 0, 0, 1, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/img-20230311-wa00341-c5f092f26d5a3593de16785514730110-320-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2023-02-06-at-11-57-551-c459e5bcddf1d7b34916757007217803-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/fuark-fitness-king-561-ffc43af8aad774244a16835712403097-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'short',
		id: '216',
		nombre: 'Short Alpha Pink',
		precio: 14000.0,
		descuento: 0,
		talles: [0, 1, 0, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2022-08-25-at-10-33-11-11-861af392b3bf29740816631634719449-320-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'short',
		id: '217',
		nombre: 'Short Alpha Black',
		precio: 14000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://tienda.gfitness.com.ar/web/image/product.template/4353/image_1024?unique=cae79f8',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'kit',
		id: '218',
		nombre: 'Kit Woman Grey',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2022-03-16-at-15-48-551-640-0-f6cc3b948d57e8725016718002492820-240-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'kit',
		id: '219',
		nombre: 'Kit Woman Bordeaux',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2022-10-12-at-2-13-55-pm-11-9a265e370f50cc749216655951719455-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/whatsapp-image-2022-10-12-at-2-13-55-pm1-d8ca792bcc5a73f87b16655951720617-480-0.webp',
		],
	},
	{
		marca: 'FUARK',
		prenda: 'musculosa',
		id: '220',
		nombre: 'Kit Texture Black',
		precio: 15000.0,
		descuento: 0,
		talles: [0, 1, 0, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/de6559ce-94e1-43ce-b7ad-24388b01ace91-a708ba2de0743c00ba16456194930640-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/956/789/products/3145a6a2-1533-497a-8a28-58b080e901ed1-e78eb3a0bb36faee2316412322975021-480-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'remera',
		id: '301',
		nombre: 'Remera Narok Francia',
		precio: 8500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://acdn.mitiendanube.com/stores/001/879/723/products/71fbc0a7-b26c-424f-ac44-4270b4949c411-ce51251fe1bfd28a7116721459944898-640-0.webp',
			'https://acdn.mitiendanube.com/stores/001/879/723/products/f70ff451-ba28-472f-baba-3b2d2ac0d19b1-c47611cdae324aeb3716721459947372-640-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'remera',
		id: '302',
		nombre: 'Remera Narok Negro',
		precio: 8500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/aeca9fe6-9cb5-4c42-9aab-f9bc9baee81f-95f627bd9d346dff5a16439800792219-1024-1024.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'remera',
		id: '303',
		nombre: 'Remera Narok Verde',
		precio: 8500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/fe14f138-9caf-4549-bd5b-6665660d4a30-a007c496288051f5dd16439800792284-1024-1024.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'remera',
		id: '304',
		nombre: 'Remera Narok Marino',
		precio: 8500.0,
		descuento: 0,
		talles: [0, 0, 1, 1, 1, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/da976650-d66a-4541-9459-ec1eda7e768f-abc949d6c503ad08dc16505657832761-1024-1024.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'musculosa',
		id: '305',
		nombre: 'Musculosa Odisea Black',
		precio: 7000.0,
		descuento: 0,
		talles: [0, 0, 0, 0, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/708dcdd9-b1fe-4d90-94bf-a7ae64ab2c73-8e33e46e5b7a92bae416638578648444-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/24da543c-cbba-4bb8-86a5-0756c9f619af-508ea5e6b1c247ae2516638578649545-1024-1024.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'musculosa',
		id: '306',
		nombre: 'Musculosa Odisea White',
		precio: 7000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/6add1f90-1cd4-4cef-889d-9d79aeb9d345-1e80198095c24215c616638578648060-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/b7fa8c11-e702-44fc-954a-fa449505458e-01b975d24eeed200af16638578648262-640-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'short',
		id: '307',
		nombre: 'Short Narok Negro',
		precio: 6000.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 0, 0, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/_dsc37311-c5472939ada1fe2c9116838973473091-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/_dsc37301-54b95ba0f3e16d5af716838973474610-640-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'short',
		id: '308',
		nombre: 'Short Calza Runing Fucsia',
		precio: 7000.0,
		descuento: 0,
		talles: [0, 0, 1, 1, 1, 0, 0],
		genero: 'mujer',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/d7ea22d1-f6a0-4c5e-a618-e1bcb83a39961-2911eb3b461fcd5d7716800077186215-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/9e7a7f40-20a3-4042-99b9-6956e950406f1-bb36d46deb8197c2c116800077188791-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/e1c9463f-9e69-4c49-9c1f-de44e495a8e01-1b7a06ca09674ad75816800077188804-640-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'short',
		id: '309',
		nombre: 'Short Calza Runing Negro',
		precio: 7000.0,
		descuento: 0,
		talles: [0, 0, 1, 1, 0, 0, 0],
		genero: 'unisex',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/73881755-ca2a-4896-ba68-39e2bf8e53b51-3469ba44b430afeeba16800312982132-640-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/740414a1-a326-49c0-aa7a-064603ab97061-6ebbf66425b5f3d9b116800312981113-1024-1024.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/8a234941-50d5-49ff-a0f3-3eb04a18e95c1-b9df580a89ade1d22316800312979804-640-0.webp',
		],
	},
	{
		marca: 'Yakka',
		prenda: 'calza',
		id: '310',
		nombre: 'Calza Deportiva Hombre',
		precio: 7500.0,
		descuento: 0,
		talles: [0, 1, 1, 1, 1, 1, 0],
		genero: 'hombre',
		images: [
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/91d06510-8470-4bf4-9668-4e3887c3c785-0baa1e9df88d5b1aa616494409750988-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/20598981-7a6f-4f09-9c0c-3290b2c60417-180bbab68162b78d7416494409751199-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/ca225f10-3240-4b2a-8ec3-f2b3219d62c3-9459319bcdb509cfc616494409751064-480-0.webp',
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/023/047/products/e4d14b83-d08a-4dfe-b219-b0756aeed8eb-260a8fb4a6f2f8177c16494409751243-480-0.webp',
		],
	},
];

const initialState = {
	data: [...data],
	filteredData: [...data],
	fullname: '',
	email: '',
	logged: false,
	name: '',
	size: '',
	quantity: 0,
	price: 0,
	image: '',
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case MODAL_CART_INFO:
			return {
				...state,
				name: payload.name,
				size: payload.selectedSize,
				quantity: payload.quantity,
				price: payload.price,
				image: payload.image,
			};
		case FILTER_DATA:
			return {
				...state,
				filteredData: payload.filteredData,
			};
		case SORT_GEN: {
			const allowedGenders = [];
			if (payload.gender === 'male') {
				allowedGenders.push('hombre', 'unisex');
			} else if (payload.gender === 'female') {
				allowedGenders.push('mujer', 'unisex');
			} else allowedGenders.push('unisex');

			const genderData = data.filter((item) =>
				allowedGenders.includes(item.genero),
			);
			return {
				...state,
				filteredData: genderData,
			};
		}
		case SIGN_IN:
			return {
				...state,
				fullname: payload.user.user_metadata.fullName,
				email: payload.user.email,
				logged: payload.user.aud === 'authenticated',
			};
		case LOG_OUT:
			return {
				...state,
				fullname: '',
				email: '',
				logged: false,
			};
		default:
			return { ...state };
	}
};

export default reducer;
