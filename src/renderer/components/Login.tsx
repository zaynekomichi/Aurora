import './Login.css';
const Login = () => {
  return(
    <div className="LoginMain">
      <div className="Header">
        <h1>AURORA</h1>
      </div>
      <div className="LoginForm">
        <span>Username</span>
        <input type="text"/>
        <span>Password</span>
        <input type="Password"/>
      </div>
      <div>
        <button className="">Login</button>
      </div>
    </div>
  );
};

export default Login;
