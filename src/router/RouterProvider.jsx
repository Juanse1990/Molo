import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Detail from '../views/Detail/Detail';

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route path={'/'} element={<Home />} />
					<Route path={'/detail'} element={<Detail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterProvider;
