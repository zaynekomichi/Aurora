import {useHistory} from 'react-router-dom';
import './Login.css';
import Logo from '../../../assets/doctor.png';
import back from '../../../assets/DLogin.jpg';
const Login = () => {
  const Verify =()=>{
    let history = useHistory();
    history.push("/Main");
  }
  return(
    <div className="LoginContainer">
    <div className="Login">
      <img src={back} className="bg"/>
    </div>
    <div className="LoginMain">
      <div className="Header">
      <img src={Logo} alt="" className="Logo"/>
        <h1>AURORA</h1>
      </div>
      <div className="LoginForm">
        <span>Username</span>
        <input type="text"/>
        <span>Password</span>
        <input type="Password"/>
      </div>
      <div className="Button">
       <button className="ButtonLogin" onClick={()=>{
        Verify();
       }}><a href="/Main">Login</a></button>
      </div>
    </div>
    </div>
  );
};

export default Login;
