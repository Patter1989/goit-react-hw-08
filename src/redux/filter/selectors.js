import { createSelector } from "@reduxjs/toolkit";
import { selectUserContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filter.filterValue;

export const selectFilteredContacts = createSelector(
	[selectUserContacts, selectFilter],
	(contacts, filterValue) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filterValue.toLowerCase())
		);
	}
);