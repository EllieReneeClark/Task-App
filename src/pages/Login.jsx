import "./login.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Login() {

    const appName = "Ellie's Task App";
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault(); // Prevent page refresh on form submit

        const email = e.target.email.value; // Get email from form
        const password = e.target.password.value; // Get password from form

        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in:", user);
            navigate("/dashboard"); // Navigate to dashboard after successful login
        } catch (error) {
            console.error("Error logging in:", error);

        }
    };

  return (
    <div className="login-page">
        <div className="title-container">
            <h2>Welcome to {appName}</h2>
            <p>A simple task management app.</p>
        </div>
        <div className="login-box"> 
            <form className="login-form" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" className="login-input" />
                <br></br>
                <input type="password" name="password" placeholder="Password" className="login-input" />     
                <br></br>
                <button type="submit" className="login-button">Log In</button>      
            </form>
                <Link to="/signup">
                    <button className="sign-up-button">Sign Up</button>
                </Link>
        </div>
        <audio autoPlay loop controls className="audio-player">
            <source src="LoginMusic1.mp3" type="audio/mpeg" />
        </audio>
    </div>

  );
}