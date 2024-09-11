import { configureStore } from "@reduxjs/toolkit";
import { ContactsReducer } from "./contacts/contactsSlice";
import { FilterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const authConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};


export const store = configureStore({
	reducer: {
		contacts: ContactsReducer,
		filter: FilterReducer,
		auth: persistReducer(authConfig, authReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});


export const persistor = persistStore(store);
