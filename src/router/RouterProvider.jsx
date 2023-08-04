import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Detail from '../views/Detail/Detail';
import Products from '../views/Products/Products';

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route path={'/'} element={<Home />} />
					<Route path={'/detail/:id'} element={<Detail />} />
					<Route path={'/products'} element={<Products />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterProvider;
