import { AddContactForm } from 'components/AddContactForm';
import { Contacts } from 'components/Contacts';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 1 }}>
      <Grid container direction="row-reverse" spacing={6}>
        <Grid item xs={12} md={6}>
          <AddContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <Contacts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsPage;
