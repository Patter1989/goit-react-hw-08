import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectUserContacts } from "../contacts/contactsSelectors";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/"
})

const setAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}



export const apiLogin = createAsyncThunk("login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", formData);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const apiRegister = createAsyncThunk("register",
  async (formData, thunkApi) => {
	try {
    const { data } = await instance.post("users/signup", formData);
    setAuthHeaders(data.token)
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
  });


export const apiRefreshUser = createAsyncThunk("refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeaders(token);
      const { data } = await instance.get("users/current")
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (token) return true;
      return false;
    }
  }
    
    
);
export const apiLogout = createAsyncThunk(
	"logout",
	async (_, thunkApi) => {
		try {
      await instance.post("users/logout");
      setAuthHeaders("")
      
      return;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);