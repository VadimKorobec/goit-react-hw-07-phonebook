import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_CONTACTS } from './constants';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsSlice = {
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError() {},
  },
};
