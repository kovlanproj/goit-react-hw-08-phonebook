import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import authOperations from './redux/auth/auth-operations';
// import Container from 'components/Container/Container';
import Container from '@mui/material/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/SignInPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <Route exact path="/">
                <Redirect to="/contacts" />
              </Route>
              <PublicRoute path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>

              {/* <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} /> */}
              <PrivateRoute path="/contacts">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
      <Toaster position="top-right" />
    </Container>
  );
}
