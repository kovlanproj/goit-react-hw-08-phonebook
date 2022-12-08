import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Contacts } from 'components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <div>
      <AddContactForm />
      <Contacts />
      {/* <Toaster position="top-right" /> */}
    </div>
  );
};

export default ContactsPage;
