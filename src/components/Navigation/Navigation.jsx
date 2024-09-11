import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn,} from '../../redux/auth/authSelectors';

const buildLinkClass = ({ isActive }) =>
						clsx(css.NavLink, isActive && css.linkActive)

const Navigation = () => {
	const isLoggedIn = useSelector(selectAuthIsLoggedIn);


	
  return (
		<div>
			<nav className={css.nav}>
				<NavLink
					to='/'
					className={buildLinkClass}
				>
					Home
				</NavLink>
				{isLoggedIn && 
					<>
						<NavLink
							to='/contacts'
							className={buildLinkClass}
						>
							Contacts
						</NavLink>
											</>
				}				 
					
			</nav>
		</div>
	);
}

export default Navigation
