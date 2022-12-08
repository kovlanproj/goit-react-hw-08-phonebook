import toast from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import styles from './AddContactForm.module.css';

export function AddContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const checkContact = (contacts, name) => {
    return contacts.map(contact => contact.name).includes(name);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;
    if (checkContact(contacts, name.value)) {
      toast.error('Such contact already exists!');
      return;
    }

    try {
      addContact({ name: name.value, number: number.value });
      toast.success('Contact added');
      e.currentTarget.reset();
    } catch (error) {
      toast.error('Error! Try again');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formFields}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading && <ClipLoader color="#464646" size={12} />}
        Add contact
      </button>
    </form>
  );
}
