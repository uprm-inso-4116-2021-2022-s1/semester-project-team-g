import Navbar from './Navarindex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Form2 from './Form2';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Form' component={Form} />
        <Route path='/Form2' component={Form2} />
      </Switch>
    </Router>
  );
}

export default App;