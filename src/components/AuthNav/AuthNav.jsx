import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) =>
	clsx(css.NavLink, isActive && css.linkActive);

const AuthNav = () => {
	return (
		<div className={css.wrapper}>
			<NavLink
				to='/register'
				className={buildLinkClass}
			>
				Register
			</NavLink>
			<NavLink
				to='/login'
				className={buildLinkClass}
			>
				Login
			</NavLink>
		</div>
	);
};

export default AuthNav;
