
import css from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={css.wrapper}>
			<header className={css.header}>
				<h1>Welcome to Our Website</h1>
			</header>
			<div className='container'>
				<section className={css.section}>
					<h2>Contactbook App</h2>
				</section>
			</div>
		</div>
	);
};

export default HomePage;
