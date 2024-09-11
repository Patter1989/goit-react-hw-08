import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter.filterValue;
export const selectUserContacts = (state) => state.contacts.items;
export const selectUserContactsIsLoading = (state) => state.contacts.loading;
export const selectUserContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
	[selectUserContacts, selectFilter],
	(contacts, filterValue) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filterValue.toLowerCase())
		);
	}
);


