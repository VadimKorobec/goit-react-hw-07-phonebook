import { createSlice } from '@reduxjs/toolkit';
// import { INITIAL_CONTACTS } from './constants';
import { fetchContacts, addContact } from './operations';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: INITIAL_CONTACTS,
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const contactsReducer = contactSlice.reducer;

// export const { addContact, deleteContact } = contactSlice.actions;

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
