import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import { clearContacts } from "../../redux/contacts/slice";
import css from "./UserMenu.module.css";
const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthUser);

	const handleLogout = () => {
		dispatch(apiLogout()).then(() => {
			dispatch(clearContacts());
		});
	};

	return (
		<div className={css.wrapper}>
			<p className={css.text}>Welcome, {user.email}</p>
			<button
				className={css.button}
				type='button'
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
};

export default UserMenu;
