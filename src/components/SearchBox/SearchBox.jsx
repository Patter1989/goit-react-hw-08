import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { selectFilter } from "../../redux/contacts/contactsSelectors";


const SearchBox = () => {
	const dispatch = useDispatch();
	const searchedContact = useSelector(selectFilter);
	const handleSearch = (event) => {
		const value = event.target.value;
		dispatch(setFilterValue(value));
	};
	return (
		<div>
			<p className={css.searchTxt}>Find contact by name</p>
			<input
				className={css.input}
				type='text'
				value={searchedContact}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBox;
