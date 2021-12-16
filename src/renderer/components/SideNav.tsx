import {Link} from 'react-router-dom';
import './SideNav.css';
export default function SideNav(){
	return(
		<div id="SideNav">
			<div id="NavList">
				<div><p><Link to="/">Dashboard</Link></p></div>
				<div><p><Link to="/Appointments">Appointments</Link></p></div>
				<div><p><Link to="/Bookings">Booking</Link></p></div>
				<div><p><Link to="/Lab">Lab</Link></p></div>
				<div><p><Link to="/Accounting">Accounting</Link></p></div>
				<div><p><Link to="/Settings">Settings</Link></p></div>
			</div>
		</div>
		);
}
