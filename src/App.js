import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404: page not found</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Page} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
