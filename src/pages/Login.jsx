import "./login.css";

export default function Login() {

    const appName = "Ellie's Task App";


  return (
    <div className="login-page">
        <div className="title-container">
            <h2>Welcome to {appName}</h2>
            <p>A simple task management app.</p>
        </div>
        <div className="login-box"> 
            <form className="login-form">
                <input type="text" placeholder="Username" className="login-input" />
                <br></br>
                <input type="password" placeholder="Password" className="login-input" />     
                <br></br>
                <button type="submit" className="login-button">Log In</button>      
            </form>
        </div>
        <audio autoPlay loop controls className="audio-player">
            <source src="LoginMusic1.mp3" type="audio/mpeg" />
        </audio>
    </div>

  );
}