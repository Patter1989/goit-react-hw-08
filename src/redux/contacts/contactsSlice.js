import { createSlice } from "@reduxjs/toolkit"
import { apiAddContacts, apiDeleteContacts, apiFetchContacts } from "../contacts/contactsOperations";


const INITIAL_STATE = {
		items: [],
		loading: false,
		error: null,

};

const contactSlice = createSlice({
	name: "contacts",
	initialState: INITIAL_STATE,
	reducers: {
		clearContacts: (state) => {
			state.items = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(apiFetchContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiFetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(apiFetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(apiDeleteContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = state.items.filter(
					(contact) => contact.id !== action.payload.id
				);
			})
			.addCase(apiDeleteContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(apiAddContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiAddContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(apiAddContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			}),
});


export const ContactsReducer = contactSlice.reducer;
export const { clearContacts} = contactSlice.actions



