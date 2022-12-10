import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://kovlanproj.github.io/goit-react-hw-08-phonebook/"
      >
        My Contacts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
