import {Link} from 'react-router-dom';
import Logo from '../../../assets/doctor.png';
import './SideNav.css';
export default function SideNav(){
	return(
		<div id="SideNav">
		<div id="SideNavHeader">
			<img draggable="false" src={Logo} alt=""/>
			<div><p>AURORA</p></div>
		</div>
			<div id="NavList">
				<div><p><Link to="/Dashboard">Dashboard</Link></p></div>
				<div><p><Link to="/Appointments">Appointments</Link></p></div>
				<div><p><Link to="/Bookings">Booking</Link></p></div>
				<div><p><Link to="/Lab">Lab</Link></p></div>
				<div><p><Link to="/Patients">Patients</Link></p></div>
				<div><p><Link to="/Accounting">Accounting</Link></p></div>
				<div><p><Link to="/Settings">Settings</Link></p></div>
			</div>
		</div>
		);
}