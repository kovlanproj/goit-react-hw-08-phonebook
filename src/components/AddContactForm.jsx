import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';

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

    if (name.value === '' || number.value === '') {
      toast.error('Please enter data');
      return;
    }

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
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        type="tel"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label="Number"
        id="number"
        autoComplete="off"
      />
      <Button
        type="submit"
        disabled={isLoading}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {isLoading && <ClipLoader color="#464646" size={12} />}
        Add contact
      </Button>
    </Box>
  );
}
