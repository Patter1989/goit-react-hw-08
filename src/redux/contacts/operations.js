import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const apiFetchContacts = createAsyncThunk(
	"contacts/getAll",
	async (_, thunkApi) => {
		try {
			const { data } = await instance.get("/contacts");
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const apiDeleteContacts = createAsyncThunk(
	"contacts/delete",
	async (contactId, thunkApi) => {
		try {
			const { data } = await instance.delete(`/contacts/${contactId}`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const apiAddContacts = createAsyncThunk(
	"contacts/add",
	async (contact, thunkApi) => {
		try {
			const { data } = await instance.post(`/contacts`, contact);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
