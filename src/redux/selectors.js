import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.IsLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters.search;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],

  (search, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
);
