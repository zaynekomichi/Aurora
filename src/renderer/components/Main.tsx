import { MemoryRouter as Router, Route} from 'react-router-dom';
import SideNav from './SideNav';
import TopNav from './TopNav';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Appointments from './Appointments';
import Bookings from './Bookings';
import Settings from './Settings';
import Accounting from './Accounting';
import Lab from './Lab';
export default function Main() {
  return (

     <Router>
     <TopNav/>
       <Route exact path='/' component={Dashboard}/>
       <Route path='/Appointments' component={Appointments}/>
       <Route path='/Bookings' component={Bookings}/>
       <Route path='/Settings' component={Settings}/>
       <Route path='/Lab' component={Lab}/>
       <Route path='/Accounting' component={Accounting}/>
     <SideNav/>
     <Footer/>
     </Router>
  );
}
