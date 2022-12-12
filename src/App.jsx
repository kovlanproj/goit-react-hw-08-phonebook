import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import authOperations from './redux/auth/auth-operations';
import Container from '@mui/material/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import { routes } from 'routes';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/SignInPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const { home, contacts, login, register } = routes;

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Show React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <Route exact path={home}>
                <Redirect to={contacts} />
              </Route>
              <PublicRoute path={register} restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path={login} restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path={contacts}>
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
