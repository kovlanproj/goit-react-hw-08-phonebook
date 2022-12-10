import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchContact } from 'components/SearchContact/SearchContact';
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
    <div>
      <SearchContact />
      {isFetching && <p>Loading...</p>}

      {/* {!contacts.length ? (
        <p>There are no contacts in your list yet!</p>
      ) : (
        filteredContacts(contacts, filter) && (
          <ContactList contacts={filteredContacts(contacts, filter)} />
        )
      )} */}
      {filteredContacts(contacts, filter) && (
        <ContactList contacts={filteredContacts(contacts, filter)} />
      )}
    </div>
  );
};
