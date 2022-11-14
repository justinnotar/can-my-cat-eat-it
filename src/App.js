import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import About from './pages/About';
import Submit from './pages/Submit';
import Legal from './pages/Legal';

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
        <Route exact path='/about' component={About} />
        <Route exact path='/submit' component={Submit} />
        <Route exact path='/legal' component={Legal} />
        <Route exact path='/:id' component={Page} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
