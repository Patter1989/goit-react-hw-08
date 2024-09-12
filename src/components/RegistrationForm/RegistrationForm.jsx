import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const RegisterValidationSchema = Yup.object().shape({
	name: Yup.string()
		.required("Please enter your name")
		.min(2, "Name should have min 2 symbols")
		.max(100, "Name should have max 100 symbols"),
	password: Yup.string()
		.required("Please enter your password")
		.min(8, "Password should have min 8 symbols")
		.max(100, "Password should have max 100 symbols"),

	email: Yup.string()
		.email("Incorrect email")
		.required("Please enter your email"),
});

const INITIAL_VALUES = {
	name: "",
	email: "",
	password: "",
};

const RegistrationForm = () => {
		const dispatch = useDispatch();
		const error = useSelector(selectAuthError);

		const handleSubmit = (values) => {
			dispatch(apiRegister(values));
			// onSearch(values.searchTerm)
		};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={RegisterValidationSchema}
		>
			{({ errors }) => (
				<Form className={css.form}>
					<label className={css.label}>
						<span>User name:</span>
						<Field
							type='text'
							name='name'
							placeholder='User'
						/>
						<ErrorMessage
							className={css.errorText}
							name='name'
							component='span'
						/>
					</label>
					<label className={css.label}>
						<span>Email:</span>
						<Field
							type='text'
							name='email'
							placeholder='kirilo.example@gmail.com'
						/>
						<ErrorMessage
							className={css.errorText}
							name='email'
							component='span'
						/>
					</label>

					<label className={css.label}>
						<span>Password:</span>
						<Field
							type='password'
							name='password'
							placeholder='Enter your password'
						/>
						<ErrorMessage
							className={css.errorText}
							name='password'
							component='span'
						/>
					</label>

					<button
						disabled={Object.keys(errors).length > 0}
						className={css.submitBtn}
						type='submit'
					>
						Register
					</button>
					{error && (
						<p className={css.errorText}>Oops, some error occured... {error}</p>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default RegistrationForm;
