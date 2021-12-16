import {useState} from 'react'
import  sqlite3 from 'sqlite3';
import {Link,useHistory} from 'react-router-dom';
import {CheckUser} from './DBservices';
import './Login.css';
import Logo from '../../../assets/doctor.png';
import back from '../../../assets/DLogin.jpg';
const Login = () => {
const history = useHistory();
 const [user,setUser] = useState('');
 const [pass,setPass] = useState('');
 const [esc,setEsc] = useState('white');
 const [bgp,setBgp] = useState('white');
 const [ErrorMessage,setError] = useState('');
 const Log=(user:string,pass:string)=>{
 if(user === '' && pass === ''){
  setEsc('red');
  setError('Fill in the required fields');
 }else{
  history.push("/Main");
 }
 
 }
  return(
    <div className="LoginContainer">
    <div className="Login">
      <img draggable="false" src={back} className="bg"/>
    </div>
    <div className="LoginMain">
      <div className="Header">
      <img  draggable="false" src={Logo} alt="" className="Logo"/>
        <h1>AURORA</h1>
      </div>
      <div className="LoginForm">
        <div id="Error">
          <p style={{color:esc,background:bgp,borderRadius:'7px'}}>{ErrorMessage}</p>
        </div>
        <span>Username</span>
        <input type="text" onChange={e=>setUser(e.target.value)} />
        <span>Password</span>
        <input type="Password" onChange={e=>setPass(e.target.value)}/>
      </div>
      <div className="Button">
       <button className="ButtonLogin" onClick={()=>Log(user,pass)}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
