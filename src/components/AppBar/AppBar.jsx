import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
const AppBar = () => {
	const isLoggedIn = useSelector(selectAuthIsLoggedIn);

	return (
		<header className={css.headerWrapper}>
			<nav className={css.navigationBar}>
				<Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</nav>
		</header>
	);
};

export default AppBar;
