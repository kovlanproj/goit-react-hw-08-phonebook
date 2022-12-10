import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export default function ContactsList({ contacts }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List>
            {contacts.map(({ id, name, number }) => (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    type="button"
                    onClick={() => deleteContact(id)}
                    disabled={isDeleting}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <ContactPhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={number} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
