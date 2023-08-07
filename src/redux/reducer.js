import { FILTER_DATA, MODAL_CART_INFO } from "./actions_types";

const data = [
  {
    "marca": "FUARK",
    "prenda": "remera",
    "id": "1",
    "nombre": "Remera 1",
    "descripcion": "Descripción de la remera 1",
    "precio": 25.99,
    "descuento": 5,
    "talles": ["xs", "s", "m", "l", "xl", "xxl"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "remera",
    "id": "2",
    "nombre": "Remera 2",
    "descripcion": "Descripción de la remera 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l", "xl"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "remera",
    "id": "3",
    "nombre": "Remera 3",
    "descripcion": "Descripción de la remera 3",
    "precio": 19.99,
    "descuento": 8,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "buzo",
    "id": "4",
    "nombre": "Buzo 1",
    "descripcion": "Descripción del buzo 1",
    "precio": 45.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "buzo",
    "id": "5",
    "nombre": "Buzo Azul Oversize",
    "descripcion": "Descripción del buzo 2",
    "precio": 39.99,
    "descuento": 10,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "pantalón",
    "id": "6",
    "nombre": "Pantalón 1",
    "descripcion": "Descripción del pantalón 1",
    "precio": 34.99,
    "descuento": 15,
    "talles": ["xs", "s", "m", "l", "xl"],
    "genero": "hombre"
  },
  {
    "marca": "FUARK",
    "prenda": "pantalón",
    "id": "7",
    "nombre": "Pantalón 2",
    "descripcion": "Descripción del pantalón 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "hombre"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "remera",
    "id": "8",
    "nombre": "Remera 1",
    "descripcion": "Descripción de la remera 1",
    "precio": 25.99,
    "descuento": 5,
    "talles": ["xs", "s", "m", "l", "xl", "xxl"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "remera",
    "id": "9",
    "nombre": "Remera 2",
    "descripcion": "Descripción de la remera 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l", "xl"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "remera",
    "id": "10",
    "nombre": "Remera 3",
    "descripcion": "Descripción de la remera 3",
    "precio": 19.99,
    "descuento": 8,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "buzo",
    "id": "11",
    "nombre": "Buzo 1",
    "descripcion": "Descripción del buzo 1",
    "precio": 45.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "buzo",
    "id": "12",
    "nombre": "Buzo 2",
    "descripcion": "Descripción del buzo 2",
    "precio": 39.99,
    "descuento": 10,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "pantalón",
    "id": "13",
    "nombre": "Pantalón 1",
    "descripcion": "Descripción del pantalón 1",
    "precio": 34.99,
    "descuento": 15,
    "talles": ["xs", "s", "m", "l", "xl"],
    "genero": "mujer"
  },
  {
    "marca": "AGUA FiTNESS",
    "prenda": "pantalón",
    "id": "14",
    "nombre": "Pantalón 2",
    "descripcion": "Descripción del pantalón 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "mujer"
  },
  {
    "marca": "BASSET",
    "prenda": "remera",
    "id": "15",
    "nombre": "Remera 1",
    "descripcion": "Descripción de la remera 1",
    "precio": 25.99,
    "descuento": 5,
    "talles": ["xs", "s", "m", "l", "xl", "xxl"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "remera",
    "id": "16",
    "nombre": "Remera 2",
    "descripcion": "Descripción de la remera 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l", "xl"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "remera",
    "id": "17",
    "nombre": "Remera 3",
    "descripcion": "Descripción de la remera 3",
    "precio": 19.99,
    "descuento": 8,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "buzo",
    "id": "18",
    "nombre": "Buzo 1",
    "descripcion": "Descripción del buzo 1",
    "precio": 45.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "buzo",
    "id": "19",
    "nombre": "Buzo 2",
    "descripcion": "Descripción del buzo 2",
    "precio": 39.99,
    "descuento": 10,
    "talles": ["m", "l", "xl", "xxl"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "pantalón",
    "id": "20",
    "nombre": "Pantalón 1",
    "descripcion": "Descripción del pantalón 1",
    "precio": 34.99,
    "descuento": 15,
    "talles": ["xs", "s", "m", "l", "xl"],
    "genero": "unisex"
  },
  {
    "marca": "BASSET",
    "prenda": "pantalón",
    "id": "21",
    "nombre": "Pantalón 2",
    "descripcion": "Descripción del pantalón 2",
    "precio": 29.99,
    "descuento": 0,
    "talles": ["s", "m", "l"],
    "genero": "unisex"
  }
]

const initialState = {
  data:[...data],
  filteredData:[...data],
  genero:'',
  name:'',
  size: '',
  quantity: 0,
  price: 0,
  };

  const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case MODAL_CART_INFO:
        return {
          ...state,
          name:payload.name,
          size: payload.selectedSize,
          quantity: payload.quantity,
          price:payload.price
        };
        case FILTER_DATA:
          return {
            ...state,
            filteredData: payload.filteredData
          }
      default:
        return {...state};
    }
  };

export default reducer;