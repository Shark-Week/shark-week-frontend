import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import SharkPage from './views/SharkPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/shark/:id">
            <SharkPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
