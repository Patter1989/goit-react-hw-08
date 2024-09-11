import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { apiRefreshUser } from "./redux/auth/authOperations";
import { selectAuthIsRefreshing } from "./redux/auth/authSelectors";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import css from "./App.module.css"

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() =>
	import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
	const isRefreshing = useSelector(selectAuthIsRefreshing);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(apiRefreshUser());
	}, [dispatch]);

	if (isRefreshing) return <p>Please wait...</p>;

	return (
		<div className={css.app}>
			<Toaster
				position='top-center'
				containerStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
				toastOptions={{
					style: {
						color: "#d9534f",
						backgroundColor: "#71c9ce",
					},
				}}
			/>
			<Suspense fallback={<ProgressBar />}>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					>
						<Route
							index
							element={<HomePage />}
						/>
						<Route
							path='/contacts'
							element={<ProtectedRoute component={<ContactsPage />} />}
						/>
						<Route
							path='/register'
							element={<RestrictedRoute component={<RegistrationPage />} />}
						/>
						<Route
							path='/login'
							element={<RestrictedRoute component={<LoginPage />} />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
