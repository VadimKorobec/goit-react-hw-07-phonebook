import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.IsLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getFilteredConctacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
