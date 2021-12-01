import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import Form from './Form';

function App() {
  return (
    <Router>
      <div className="container">
      </div>
      <Route path="/" component={Form}/>
    </Router>
  );
}

export default App;
