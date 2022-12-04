import Navigation from './Navigation';
import AuthNav from './AuthNav';
// import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
