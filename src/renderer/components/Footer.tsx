import offline from '../../../assets/inapp/offline.png';
import './Footer.css';
export default function Footer(){
	return(
		<div id="Footer">
      <div>
		    <img className="cimg" src={offline} alt="Offline"/>
      </div>
      <div>
		   <small>© 2021 Synaptics</small>
      </div>
      <div>

      </div>
		</div>
		);
}
