import {Link} from 'react-router-dom';
import logo from '../../../assets/doctor.png';
import user from '../../../assets/inapp/user.png';
import logout from '../../../assets/inapp/logout.png';
import './TopNav.css';
export default function TopNav(){
	return(
		<div id="TopNav">
		<div className="top_card">
			<img draggable="false"  src={logo} alt="" className="logo"/>
			<input type="text"  className="search" placeholder="search..."/>
		</div>
		<div className="top_card">
			<img src={user} alt="User" className="logo"/>
			<img src={logout} alt="Logout" className="logo"/>
		</div>
		</div>
		);
}
