import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import NavBar from '../components/NavBar/NavBar';

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route path={'/'} element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterProvider;
