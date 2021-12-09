import {MemoryRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import icon from '../../assets/icon.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path = "/" component={Login}/>
      <Route path="/Main" component={Main}/>
    </Router>
  );
}
