import { Switch, Route } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        {/* <Route exact path="/" component={HomeView} /> */}
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/todos" component={TodosView} /> */}
      </Switch>
    </Container>
  );
}
