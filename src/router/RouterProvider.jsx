import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Detail from '../views/Detail/Detail';
import Products from '../views/Products/Products';
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/AboutUs/AboutUs';

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route path={'/'} element={<Home />} />
					<Route path={'/detail/:id'} element={<Detail />} />
					<Route path={'/products'} element={<Products />} />
					<Route path={'/aboutus'} element={<AboutUs />} />
					<Route path={'*'} element={<Navigate to='/' />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default RouterProvider;
