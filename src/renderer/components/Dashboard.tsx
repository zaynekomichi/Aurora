 import './Page.css';
 import './Dashboard.css';
 import user from '../../../assets/inapp/user.png';
 const Dashboard = () => {
  return (
    <div id="Page">
      <div id="Dashboard">
        <h1>WELCOME</h1>
        <p>Zayne</p>
        <img src={user} alt="" id="welcome"/>
        <div id="DashInfor">
          <div>
            <p>Todays Appointments</p>
            <p>4</p>
            <button>Appointments</button>
          </div>
          <div>
            <p>Bookings</p>
            <p>6</p>
            <button>View Bookings</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard;

