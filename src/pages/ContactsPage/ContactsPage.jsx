import { useEffect} from "react";
import Section from "../../components/Section/Section.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { apiFetchContacts } from "../../redux/contacts/contactsOperations.js";
import Loader from "../../components/Loader/loader.jsx";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
	const isLoading = useSelector((state) => state.contacts.loading);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(apiFetchContacts());
	}, [dispatch]);

	return (
		<div className={css.container}>
			<h1>Phonebook</h1>
			<Section className={css.section}>
				<ContactForm />
			</Section>
			<Section className={css.section}>
				<SearchBox />
			</Section>
			{isLoading && <Loader />}
			<Section className={css.section}>
				<ContactList />
			</Section>
		</div>
	);
};


export default ContactsPage;
