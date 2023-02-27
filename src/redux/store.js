import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
