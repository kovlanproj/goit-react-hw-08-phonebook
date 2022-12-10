import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box container style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}
