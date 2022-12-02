import { Switch, Route } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        {/* <Route exact path="/" component={HomeView} /> */}
        <Route path="/register" component={RegisterPage} />
        {/* <Route path="/login" component={LoginView} /> */}
        {/* <Route path="/todos" component={TodosView} /> */}
      </Switch>
    </Container>
  );
}
