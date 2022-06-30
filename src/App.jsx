import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditSharkPage from './views/EditSharkPage';
import Header from './views/Header';
import Home from './views/Home';
import MakeShark from './views/MakeShark';
import SharkPage from './views/SharkPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/makeShark">
            <MakeShark />
          </Route>
          <Route exact path="/shark/:id">
            <SharkPage />
          </Route>
          <Route exact path="/shark/:id/edit">
            <EditSharkPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
