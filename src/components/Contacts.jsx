import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import SearchForm from 'components/SearchForm';
import ContactsList from 'components/ContactsList';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';

export const Contacts = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <Box sx={{ mt: 1 }}>
      <SearchForm />
      {isFetching && <p>Loading...</p>}

      {!contacts?.length ? (
        <p>There are no contacts in your list yet!</p>
      ) : (
        filteredContacts(contacts, filter) && (
          <ContactsList contacts={filteredContacts(contacts, filter)} />
        )
      )}
    </Box>
  );
};
